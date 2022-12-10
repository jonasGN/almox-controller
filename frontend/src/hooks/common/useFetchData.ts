import { useQuery } from "react-query";

import { usePrivateApi } from "../auth";
import { useNavigation } from "./useNavigation";

interface QueryOptions {
  key: Array<string | number>;
}

interface FetchDataOptions {
  /**
   Options used by react-query to identify how to controll the data flow
   */
  queryOptions?: QueryOptions;
}

interface FetchData<T> {
  content?: T;
  hasError: boolean;
  isLoading: boolean;
}

/**
 * Used to fetch data from internet
 * @param url the API path to make the GET request
 * @returns an Promise with the data `T` type
 */
export const useFetchData = <T>(
  url: string,
  options?: FetchDataOptions
): FetchData<T> => {
  const api = usePrivateApi();
  const { navigateTo, location } = useNavigation();

  const queryKeys = url.replace("/api/", "").split("/");

  const fetchData = async () => {
    try {
      const response = await api.get(url);
      const dataKey = Object.keys(response.data)[0];
      const data = response.data[dataKey] as T;
      return data;
    } catch (e) {
      console.error("FETCH DATA ERROR:", e);
      navigateTo("/", { state: { from: location }, replace: true });
      throw e;
    }
  };

  const { data, isLoading, isError } = useQuery(
    options?.queryOptions?.key ?? queryKeys,
    fetchData
  );

  return { content: data, hasError: isError, isLoading };
};
