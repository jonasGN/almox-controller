import { PageHeader } from "../../components/PageHeader";
import { ItemRequestsList } from "./ItemRequestsList";

export const ItemsRequestsPage = (): JSX.Element => {
  return (
    <>
      <PageHeader title="Solicitações" />

      <ItemRequestsList />
    </>
  );
};
