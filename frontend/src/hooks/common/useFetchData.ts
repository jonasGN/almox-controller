import { useEffect, useState } from "react";
import { usePrivateApi } from "../auth";

interface FetchDataParams {
  url: string;
  /**
   * @deprecated The `key` property will be deprecated in future
   */
  key: string;
  initialContentValue: any;
}

interface FetchData<T> {
  content: T;
  hasError: boolean;
}

export const useFetchData = <T>(params: FetchDataParams): FetchData<T> => {
  const { url, key, initialContentValue } = params;

  const [content, setContent] = useState<T>(initialContentValue);
  const [hasError, setHasError] = useState(false);

  const api = usePrivateApi();

  useEffect(() => {
    let isMounted = true;
    const controller = new AbortController();

    const fetchData = async () => {
      try {
        const response = await api.get(url, { signal: controller.signal });
        const data = response.data[key] as T;

        isMounted && setContent(data);
        setHasError(false);
      } catch (e) {
        setHasError(true);
        console.error("FETCH DATA ERROR:", e);
      }
    };

    fetchData();

    return () => {
      isMounted = false;
      controller.abort();
    };
  }, []);

  return { content, hasError };
};
