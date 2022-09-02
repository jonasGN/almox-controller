import { AxiosError } from "axios";
import { AuthResponse } from "../@types/apiResponse";
import { AuthData } from "../@types/entities";
import {
  BadRequestException,
  ServerException,
  UnauthorizedException,
} from "../exceptions";
import { apiClient } from "../services/apiClient";

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

    return { ...data };
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
