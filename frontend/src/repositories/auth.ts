import type { AuthResponse, RefreshTokenResponse } from "@Types/responses";
import type { AuthData, RefreshTokenData } from "@Types/entities";
import { AxiosError } from "axios";
import {
  BadRequestException,
  ServerException,
  UnauthorizedException,
} from "@/exceptions";
import { apiClient } from "@/services/apiClient";
import { formatter } from "@/utils/formatters";
import { convert } from "@/utils/converters";

interface Credentials {
  internalCode: string;
  password: string;
}

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
      roles: convert.rolesToUserRoles(data.roles),
      user: {
        name: formatter.toShortName(data.user.name),
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
        throw new UnauthorizedException("Código interno e/ou senha incorretos.");
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

export const signOut = async (): Promise<void> => {
  try {
    await apiClient.get("/api/signout", { withCredentials: true });
  } catch (e) {
    throw e;
  }
};
