import { Loading } from "../../components/Loading";

interface ContentWrapperProps {
  isLoading: boolean;
  hasError: boolean;
  children: React.ReactNode;
}

/**
 * This component wrappers main pages to handle errors and loading
 */
export const ContentWrapper = (props: ContentWrapperProps): JSX.Element => {
  const { isLoading, hasError, children } = props;

  if (hasError) return <span>Create error component</span>;

  if (isLoading) return <Loading />;

  return <>{children}</>;
};
