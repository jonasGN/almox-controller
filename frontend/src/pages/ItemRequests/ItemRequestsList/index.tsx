import type { ItemRequestResponse } from "@Types/api";
import { useFetchData } from "@/hooks/common";
import { convert } from "@/utils/converters";

import { ItemRequestCard } from "@/components/ItemRequestCard";
import { ContentHelper } from "@/components/ContentHelper";

import styles from "./styles.module.scss";

export const ItemRequestsList = (): JSX.Element => {
  const { content, hasError, isLoading } =
    useFetchData<ItemRequestResponse[]>("/api/items/requests");

  if (isLoading || hasError) {
    return <ContentHelper isLoading={isLoading} hasError={hasError} />;
  }

  const requests = content?.map((request) =>
    convert.itemRequestResponseToItemRequest(request)
  );

  return (
    <div className={styles.content}>
      {requests?.map((request) => (
        <ItemRequestCard key={request.id} itemRequest={request} />
      ))}
    </div>
  );
};
