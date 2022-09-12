import { QueryClient, QueryClientProvider, QueryObserverOptions } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";

interface QueryProviderProps {
  children: React.ReactNode;
}

const queriesOptions: QueryObserverOptions = {
  staleTime: 1000 * 60, // 1min
};

const client = new QueryClient({
  defaultOptions: {
    queries: queriesOptions,
  },
});

export const QueryProvider = (props: QueryProviderProps): JSX.Element => {
  const { children } = props;

  return (
    <QueryClientProvider client={client}>
      {children}
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
};
