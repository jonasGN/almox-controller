import { ItemResponse } from "@Types/responses";
import { useFetchData } from "@/hooks/common";
import { itemResponseToItem } from "@/utils/converters";

import { ItemCard } from "@/components/ItemCard";
import { ContentHelper } from "@/components/ContentHelper";

import styles from "./styles.module.scss";

export const CatalogItemList = (): JSX.Element => {
  const { content, hasError, isLoading } = useFetchData<ItemResponse[]>({
    queryKey: ["items"],
    url: "/api/items",
  });

  if (isLoading || hasError) {
    return <ContentHelper isLoading={isLoading} hasError={hasError} />;
  }

  const items = content?.map((item) => itemResponseToItem(item));

  return (
    <div className={styles.contentContainer}>
      {items?.map((item) => (
        <ItemCard key={item.id} item={item} />
      ))}
    </div>
  );
};
