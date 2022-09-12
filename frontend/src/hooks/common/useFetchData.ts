import { useEffect, useRef, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
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

const isDevelopmentMode = import.meta.env.DEV;

export const useFetchData = <T>(params: FetchDataParams): FetchData<T> => {
  const { url, key, initialContentValue } = params;

  const [content, setContent] = useState<T>(initialContentValue);
  const [hasError, setHasError] = useState(false);

  const api = usePrivateApi();

  const navigate = useNavigate();
  const location = useLocation();

  // prevent React.StrictMode to recall the `fetchData` function and get an error
  const firstRun = useRef(false);

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
        navigate("/", { state: { from: location }, replace: true });
      }
    };

    if (isDevelopmentMode) {
      if (firstRun.current) fetchData();
    } else {
      fetchData();
    }

    return () => {
      isMounted = false;
      controller.abort();
      firstRun.current = true;
    };
  }, []);

  return { content, hasError };
};
