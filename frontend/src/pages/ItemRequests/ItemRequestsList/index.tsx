import { ItemRequestResponse } from "../../../@types/responses";
import { useFetchData } from "../../../hooks/common";
import { itemRequestResponseToItemRequest } from "../../../utils/converters";

import { ItemRequestCard } from "../../../components/ItemRequestCard";
import { ContentHelper } from "../../../components/ContentHelper";

import styles from "./styles.module.scss";

export const ItemRequestsList = (): JSX.Element => {
  const { content, hasError, isLoading } = useFetchData<ItemRequestResponse[]>({
    url: "/api/items/requests",
    queryKey: ["itemRequests"],
  });

  if (isLoading || hasError) {
    return <ContentHelper isLoading={isLoading} hasError={hasError} />;
  }

  const requests = content?.map((request) => itemRequestResponseToItemRequest(request));

  return (
    <div className={styles.content}>
      {requests?.map((request) => (
        <ItemRequestCard key={request.id} itemRequest={request} />
      ))}
    </div>
  );
};
