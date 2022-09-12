import { Loading } from "../Loading";

interface ContentHelperProps {
  isLoading: boolean;
  hasError: boolean;
}

export const ContentHelper = (props: ContentHelperProps): JSX.Element | null => {
  const { isLoading, hasError } = props;

  if (isLoading) return <Loading />;

  if (hasError) return <span>Error component to add</span>;

  return null;
};
