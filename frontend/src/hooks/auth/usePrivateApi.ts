import { useEffect } from "react";
import { useAuth } from "./useAuth";
import { useRefreshToken } from "./useRefreshToken";
import { apiClientPrivate } from "@/services/apiClient";

export const usePrivateApi = () => {
  const refresh = useRefreshToken();
  const { user } = useAuth();

  useEffect(() => {
    const requestIntercept = apiClientPrivate.interceptors.request.use(
      (config) => {
        if (!config.headers!["Authorization"]) {
          config.headers!["Authorization"] = `Bearer ${user.accessToken}`;
        }
        return config;
      },
      (error) => Promise.reject(error)
    );

    const responseIntercept = apiClientPrivate.interceptors.response.use(
      (response) => response,
      async (error) => {
        const prevRequest = error?.config;

        if (error?.response?.status === 403 && !prevRequest?.sent) {
          // used to retry one time when request fails
          prevRequest.sent = true;
          const newAccessToken = await refresh();
          prevRequest.headers["Authorization"] = `Bearer ${newAccessToken}`;

          return apiClientPrivate(prevRequest);
        }

        return Promise.reject(error);
      }
    );

    return () => {
      apiClientPrivate.interceptors.request.eject(requestIntercept);
      apiClientPrivate.interceptors.response.eject(responseIntercept);
    };
  }, [user, refresh]);

  return apiClientPrivate;
};
