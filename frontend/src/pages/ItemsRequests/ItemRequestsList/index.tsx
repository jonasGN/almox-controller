import { ItemRequestResponse } from "../../../@types/responses";
import { useFetchData } from "../../../hooks/common";
import { itemRequestResponseToItemRequest } from "../../../utils/converters";

import { ContentWrapper } from "../../../layout";
import { ItemRequestCard } from "../../../components/ItemRequestCard";

import styles from "./styles.module.scss";

export const ItemRequestsList = (): JSX.Element => {
  const { content, hasError } = useFetchData<ItemRequestResponse[]>({
    url: "/api/items/requests",
    key: "itemRequests",
    initialContentValue: [],
  });

  const requests = content.map((request) => itemRequestResponseToItemRequest(request));

  return (
    <ContentWrapper isLoading={requests.length === 0} hasError={hasError}>
      <div className={styles.content}>
        {requests.map((request) => (
          <ItemRequestCard key={request.id} itemRequest={request} />
        ))}
      </div>
    </ContentWrapper>
  );
};
