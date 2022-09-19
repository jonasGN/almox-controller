import { useQuery } from "react-query";

import { usePrivateApi } from "../auth";
import { useNavigation } from "./useNavigation";

interface FetchDataParams {
  url: string;
  queryKey: Array<string | number>;
}

interface FetchData<T> {
  content?: T;
  hasError: boolean;
  isLoading: boolean;
}

export const useFetchData = <T>(params: FetchDataParams): FetchData<T> => {
  const { url, queryKey } = params;

  const api = usePrivateApi();
  const { navigateTo, location } = useNavigation();

  const fetchData = async () => {
    try {
      const response = await api.get(url);
      const data = response.data[queryKey[0]] as T;
      return data;
    } catch (e) {
      console.error("FETCH DATA ERROR:", e);
      navigateTo("/", { state: { from: location }, replace: true });
      throw e;
    }
  };

  const { data, isLoading, isError } = useQuery(queryKey, fetchData);

  return { content: data, hasError: isError, isLoading };
};
