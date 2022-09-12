import { ItemResponse } from "../../../@types/responses";
import { useFetchData } from "../../../hooks/common";
import { itemResponseToItem } from "../../../utils/converters";

import { ItemCard } from "../../../components/ItemCard";
import { ContentHelper } from "../../../components/ContentHelper";

import styles from "./styles.module.scss";

export const CatalogItemList = (): JSX.Element => {
  const { content, hasError } = useFetchData<ItemResponse[]>({
    url: "/api/items",
    key: "items",
    initialContentValue: [],
  });

  const isLoading = content.length === 0;
  if (isLoading || hasError) {
    return <ContentHelper isLoading={isLoading} hasError={hasError} />;
  }

  const items = content.map((item) => itemResponseToItem(item));

  return (
    <div className={styles.contentContainer}>
      {items.map((item) => (
        <ItemCard key={item.id} item={item} />
      ))}
    </div>
  );
};
