import { AxiosError } from "axios";
import { AuthResponse, RefreshTokenResponse } from "../@types/responses";
import { UserRoles } from "../@types/common";
import { AuthData, RefreshTokenData } from "../@types/entities";
import {
  BadRequestException,
  ServerException,
  UnauthorizedException,
} from "../exceptions";
import { apiClient } from "../services/apiClient";
import { toShortName } from "../utils/formatters";

interface Credentials {
  internalCode: string;
  password: string;
}

const convertUserRoles = (roles: string[]): Array<UserRoles> => {
  const formattedRoles: UserRoles[] = roles.map((role) => {
    if (role === "ADMIN") return "admin";
    if (role === "OPERATOR") return "operator";
    if (role === "STANDARD") return "standard";
    throw Error("Invalid given user role");
  });

  return formattedRoles;
};

export const signIn = async (credentials: Credentials): Promise<AuthData> => {
  const { internalCode, password } = credentials;
  const body = { internalCode, password };

  try {
    const response = await apiClient.post("/api/signin", body, {
      headers: { "Content-Type": "application/json" },
      withCredentials: true,
    });
    const data = response.data as AuthResponse;

    return {
      accessToken: data.accessToken,
      refreshToken: data.refreshToken,
      roles: convertUserRoles(data.roles),
      user: {
        name: toShortName(data.user.name),
        internalCode: data.user.internalCode,
        avatar: data.user.avatar,
      },
    };
  } catch (e) {
    const error = e as AxiosError;

    if (!error?.response) {
      throw new ServerException("Incapaz de receber uma resposta do servidor.");
    }

    const statusCode = error.response?.status;
    if (statusCode >= 500 && statusCode <= 599) {
      throw new ServerException("Incapaz de se conectar com o servidor servidor.");
    }

    switch (statusCode) {
      case 400:
        throw new BadRequestException("Código interno ou senha não informado.");
      case 401:
        throw new UnauthorizedException("Código interno ou senha incorretos.");
      default:
        throw new Error("Erro desconhecido durante o login.");
    }
  }
};

export const refreshToken = async (): Promise<RefreshTokenData> => {
  const response = await apiClient.get("/api/refresh", {
    withCredentials: true,
  });
  const data = response.data as RefreshTokenResponse;

  return { ...data };
};
