import { ItemResponse } from "../../../@types/responses";
import { useLoadItemList } from "../../../hooks/common";
import { itemResponseToItem } from "../../../utils/converters";

import { ContentWrapper } from "../../../layout";
import { ItemCard } from "../../../components/ItemCard";

import styles from "./styles.module.scss";

const loadItemsConfig = { url: "/api/items", key: "items" };

export const CatalogItemList = (): JSX.Element => {
  const { items, hasError } = useLoadItemList<ItemResponse>(loadItemsConfig);

  const itemsFormatted = items.map((item) => itemResponseToItem(item));

  return (
    <ContentWrapper isLoading={items.length === 0} hasError={hasError}>
      <div className={styles.contentContainer}>
        {itemsFormatted.map((item) => (
          <ItemCard key={item.id} item={item} />
        ))}
      </div>
    </ContentWrapper>
  );
};
