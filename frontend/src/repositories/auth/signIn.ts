import type { AuthData } from "@Types/entities";
import type { AuthResponse } from "@Types/api";
import { AxiosError } from "axios";
import { apiClient } from "@/services/apiClient";
import { apiConvert } from "@/utils/converters";
import { formatter } from "@/utils/formatters";
import {
  BadRequestException,
  ServerException,
  UnauthorizedException,
} from "@/exceptions";

interface Credentials {
  internalCode: string;
  password: string;
}

// rethrow a new exception by request status code
const handleSignInResponseError = (error: AxiosError) => {
  const statusCode = error.response?.status;
  if (!error?.response || !statusCode) {
    throw new ServerException("Incapaz de receber uma resposta do servidor.");
  }

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
};

export const signIn = async (credentials: Credentials): Promise<AuthData> => {
  const body = {
    internalCode: credentials.internalCode,
    password: credentials.password,
  };

  try {
    const response = await apiClient.post("/api/signin", body, { withCredentials: true });
    const data = response.data as AuthResponse;

    return {
      accessToken: data.accessToken,
      refreshToken: data.refreshToken,
      roles: apiConvert.rolesToUserRoles(data.roles),
      user: {
        name: formatter.toShortName(data.user.name),
        internalCode: data.user.internalCode,
        avatar: data.user.avatar,
      },
    };
  } catch (e) {
    throw handleSignInResponseError(e as AxiosError);
  }
};
