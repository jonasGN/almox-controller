import CryptoJS from "crypto-js";

interface Payload {
  roles: string[];
  user: {
    name: string;
    internalCode: string;
    avatar: string;
  };
}

interface Config {
  accessToken: {
    expirationTime: number;
  };
  refreshToken: {
    expirationTime: number;
  };
}

interface Tokens {
  accessToken: string;
  refreshToken: string;
}

/**
 * Generates JWT access token and refresh token to mock real security implementations
 * The tokens live for 7 days before expiration
 */
export const generateTokens = function (
  secretKey: string,
  payload: Payload,
  config?: Config
): Tokens {
  const { user, roles } = payload;

  let newEpochDate = new Date().valueOf();

  const accessTokenExpirationDate =
    newEpochDate + config?.accessToken?.expirationTime! ?? 1000 * 10; // default 10s
  const refreshTokenExpirationDate =
    newEpochDate + config?.refreshToken?.expirationTime! ?? 1000 * 15; // default 15s

  const tokenObjBase = {
    typ: "JWT",
    alg: "HS256",
  };

  const tokenObjAccess = {
    token_type: "access",
    exp: accessTokenExpirationDate,
    jti: "83bc20a2fb564aa8937d167586166f67",
    roles,
    user,
  };

  const tokenObjRefresh = {
    token_type: "refresh",
    exp: refreshTokenExpirationDate,
    jti: "83bc20a2fb564aa8937d167586166f67",
    roles,
    user,
  };

  const base64urlEncode = function (obj: Object) {
    let base64url = CryptoJS.enc.Utf8.parse(JSON.stringify(obj)).toString(
      CryptoJS.enc.Base64
    );

    // crypto-js doesn't have base64url encoding; we must manually make the tokens URL safe
    base64url = base64url.replace(/=/g, "").replace(/\//g, "_").replace(/\+/g, "-");
    return base64url;
  };

  const tokenBase = base64urlEncode(tokenObjBase);
  const tokenAccess = base64urlEncode(tokenObjAccess);
  const tokenRefresh = base64urlEncode(tokenObjRefresh);

  // crypto-js returns a "wordarray" which must be stringified back to human readable text with a specific encoding
  const signatureAccessArray = CryptoJS.HmacSHA256(
    tokenBase + "." + tokenAccess,
    secretKey
  );

  // crypto-js doesn't have base64url encoding; we must manually make the tokens URL safe
  const signatureAccess = signatureAccessArray
    .toString(CryptoJS.enc.Base64)
    .replace(/=+$/, "")
    .replace(/\//g, "_")
    .replace(/\+/g, "-");

  const signatureRefreshArray = CryptoJS.HmacSHA256(
    tokenBase + "." + tokenRefresh,
    secretKey
  );

  // crypto-js doesn't have base64url encoding; we must manually make the tokens URL safe
  const signatureRefresh = signatureRefreshArray
    .toString(CryptoJS.enc.Base64)
    .replace(/=+$/, "")
    .replace(/\//g, "_")
    .replace(/\+/g, "-");

  return {
    accessToken: tokenBase + "." + tokenAccess + "." + signatureAccess,
    refreshToken: tokenBase + "." + tokenRefresh + "." + signatureRefresh,
  };
};
