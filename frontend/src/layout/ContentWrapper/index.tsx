import { Loading } from "../../components/Loading";

interface ContentWrapperProps {
  isLoading?: boolean;
  hasError?: boolean;
}

// This component should wrapper the page to handle errors and loading for mainly pages
export const ContentWrapper = (props: ContentWrapperProps): JSX.Element => {
  throw new Error("Unimplemented component");
  const { isLoading, hasError } = props;

  if (isLoading) return <Loading />;

  if (hasError) return <span>Create error component</span>;

  return (
    <>
      <span> actual component</span>
    </>
  );
};
