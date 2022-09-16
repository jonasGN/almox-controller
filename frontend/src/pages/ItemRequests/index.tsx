import { PageHeader } from "@/components/PageHeader";
import { ItemRequestsList } from "./ItemRequestsList";

export const ItemRequestsPage = (): JSX.Element => {
  return (
    <>
      <PageHeader title="Solicitações" />

      <ItemRequestsList />
    </>
  );
};
