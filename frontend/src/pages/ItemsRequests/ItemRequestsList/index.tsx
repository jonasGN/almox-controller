import { ItemRequestResponse } from "../../../@types/responses";
import { useLoadItemList } from "../../../hooks/common";
import { itemRequestResponseToItemRequest } from "../../../utils/converters";

import { ContentWrapper } from "../../../layout";
import { ItemRequestCard } from "../../../components/ItemRequestCard";

import styles from "./styles.module.scss";

export const ItemRequestsList = (): JSX.Element => {
  const { items, hasError } = useLoadItemList<ItemRequestResponse>({
    url: "/api/items/requests",
    key: "itemRequests",
  });

  const itemsRequests = items.map((request) => itemRequestResponseToItemRequest(request));

  return (
    <ContentWrapper isLoading={items.length === 0} hasError={hasError}>
      <div className={styles.content}>
        {itemsRequests.map((request) => (
          <ItemRequestCard key={request.id} itemRequest={request} />
        ))}
      </div>
    </ContentWrapper>
  );
};
