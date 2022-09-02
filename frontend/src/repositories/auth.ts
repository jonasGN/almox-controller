import { AuthResponse } from "../@types/apiResponse";
import { AuthData } from "../@types/entities";
import { apiClient } from "../services/apiClient";

export const signin = async (email: string, password: string): Promise<AuthData> => {
  const body = { email, password };

  const response = await apiClient.post("/api/signin", body);
  const data = response.data as AuthResponse;

  return { ...data };
};
