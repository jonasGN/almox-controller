import { ItemResponse } from "../../../@types/responses";
import { useFetchData } from "../../../hooks/common";
import { itemResponseToItem } from "../../../utils/converters";

import { ContentWrapper } from "../../../layout";
import { ItemCard } from "../../../components/ItemCard";

import styles from "./styles.module.scss";

export const CatalogItemList = (): JSX.Element => {
  const { content, hasError } = useFetchData<ItemResponse[]>({
    url: "/api/items",
    key: "items",
    initialContentValue: [],
  });

  const items = content.map((item) => itemResponseToItem(item));

  return (
    <ContentWrapper isLoading={items.length === 0} hasError={hasError}>
      <div className={styles.contentContainer}>
        {items.map((item) => (
          <ItemCard key={item.id} item={item} />
        ))}
      </div>
    </ContentWrapper>
  );
};
