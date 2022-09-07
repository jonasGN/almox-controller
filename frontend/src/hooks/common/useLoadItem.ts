import { useEffect, useState } from "react";
import { usePrivateApi } from "../auth";

interface LoadItemProps {
  url: string;
  /**
   * @deprecated The `key` property will be deprecated in future
   */
  key: string;
}

interface LoadItemHook<T> {
  item: T;
  hasError: boolean;
}

export const useLoadItem = <T>(data: LoadItemProps): LoadItemHook<T> => {
  const [item, setItem] = useState<T>({} as T);
  const [hasError, setHasError] = useState(false);

  const api = usePrivateApi();

  useEffect(() => {
    let isMounted = true;
    const controller = new AbortController();

    const fetchItem = async () => {
      try {
        const response = await api.get(data.url, { signal: controller.signal });
        const item = response.data[data.key] as T;

        setHasError(false);
        isMounted && setItem(item);
      } catch (e) {
        setHasError(true);
        console.error("LOAD ITEM ERROR:", e);
      }
    };

    fetchItem();

    return () => {
      isMounted = false;
      controller.abort();
    };
  }, []);

  return { item, hasError };
};
