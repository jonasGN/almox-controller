import { useEffect, useState } from "react";
import { usePrivateApi } from "../auth";

interface LoadItemListProps {
  url: string;
  /**
   * @deprecated The `key` property will be deprecated in future
   */
  key: string;
}

interface LoadItemListHook<T> {
  items: Array<T>;
  hasError: boolean;
}

export const useLoadItemList = <T>(data: LoadItemListProps): LoadItemListHook<T> => {
  const [items, setItems] = useState<Array<T>>([]);
  const [hasError, setHasError] = useState(false);

  const api = usePrivateApi();

  useEffect(() => {
    let isMounted = true;
    const controller = new AbortController();

    const fetchItems = async () => {
      try {
        const response = await api.get(data.url, { signal: controller.signal });
        const items = response.data[data.key] as Array<T>;

        setHasError(false);
        isMounted && setItems(items);
      } catch (e) {
        setHasError(true);
        console.error("LOAD ITEMS ERROR:", e);
      }
    };

    fetchItems();

    return () => {
      isMounted = false;
      controller.abort();
    };
  }, []);

  return { items, hasError };
};
