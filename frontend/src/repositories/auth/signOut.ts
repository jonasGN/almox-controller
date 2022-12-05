import { apiClient } from "@/services/apiClient";

export const signOut = async (): Promise<void> => {
  try {
    await apiClient.get("/api/signout", { withCredentials: true });
  } catch (e) {
    throw e;
  }
};
