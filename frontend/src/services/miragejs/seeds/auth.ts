import type { AuthResponse, RefreshTokenResponse } from "@Types/api";
import { faker } from "@faker-js/faker";
import { generateTokens } from "../../cryptoJS";

const roles = faker.helpers.arrayElements(
  ["ADMIN", "OPERATOR", "STANDARD"],
  faker.datatype.number({ min: 1, max: 3 })
);

const user = {
  name: faker.name.fullName(),
  internalCode: faker.random.numeric(10),
  avatar: faker.internet.avatar(),
};

const jwtTokens = generateTokens("chave-de-teste", { roles, user });

const tokens = {
  accessToken: jwtTokens.accessToken,
  refreshToken: jwtTokens.refreshToken,
};

export const auth: AuthResponse = {
  accessToken: tokens.accessToken,
  refreshToken: tokens.refreshToken,
  roles: roles,
  user: user,
};

export const refreshToken: RefreshTokenResponse = {
  accessToken: tokens.accessToken,
  refreshToken: tokens.refreshToken,
  roles: roles,
  user: user,
};
