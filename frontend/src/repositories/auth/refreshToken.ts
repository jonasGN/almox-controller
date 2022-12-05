import type { RefreshTokenData } from "@Types/entities";
import type { RefreshTokenResponse } from "@Types/responses";
import { apiClient } from "@/services/apiClient";

export const refreshToken = async (): Promise<RefreshTokenData> => {
  const response = await apiClient.get("/api/refresh", {
    withCredentials: true,
  });
  const data = response.data as RefreshTokenResponse;

  return { ...data };
};
