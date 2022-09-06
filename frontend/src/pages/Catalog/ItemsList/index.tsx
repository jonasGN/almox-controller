import { useEffect, useState } from "react";
import { Item } from "../../../@types/entities";
import { fetchItems } from "../../../repositories/items";

import { ItemCard } from "../../../components/ItemCard";
import { Loading } from "../../../components/Loading";

import styles from "./styles.module.scss";

export const CatalogItemsList = (): JSX.Element => {
  const [items, setItems] = useState<Item[]>([]);

  useEffect(() => {
    fetchItems().then((data) => setItems(data));
  }, []);

  if (items.length === 0) return <Loading />;

  return (
    <div className={styles.contentContainer}>
      {items.map((item) => (
        <ItemCard key={item.id} item={item} />
      ))}
    </div>
  );
};
