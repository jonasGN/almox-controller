import { useEffect, useState } from "react";
import { Item } from "../../@types/entities";
import { api } from "../../services/api";

import { ItemCard } from "../../components/ItemCard";
import { ItemDetailsCard } from "../../components/ItemDetailsCard";
import { SearchBar } from "../../components/SearchBar";

import styles from "./styles.module.scss";

export default function ItemsPage() {
  const [items, setItems] = useState<Item[]>([]);
  const [itemFocused, setItemFocused] = useState<Item>({} as Item);

  useEffect(() => {
    async function fetchItems() {
      const response = await api.get("items");
      const items = response.data.items as Item[];
      const formatedItems = items.map((item) => ({
        ...item,
        unitPrice: item.unitPrice / 100,
      }));

      setItems(formatedItems);
    }

    fetchItems();
  }, []);

  function handleCardFocused(itemId: number) {
    const itemFocused = items.find((item) => item.id === itemId);

    if (!itemFocused) return;
    setItemFocused(itemFocused);
  }

  const hasItemFocused = Object.keys(itemFocused).length !== 0;
  const focusedSectionClass = hasItemFocused ? styles.shrink : "";

  return (
    <main className={styles.grid}>
      <section className={`${styles.itemsSection} ${focusedSectionClass}`}>
        <SearchBar />
        {items.map((item) => (
          <ItemCard
            key={item.id}
            item={item}
            isFocused={item.id === itemFocused.id}
            onClick={() => handleCardFocused(item.id)}
          />
        ))}
      </section>

      {hasItemFocused ? (
        <section className={styles.itemDetailsSection}>
          <ItemDetailsCard
            item={itemFocused}
            onRequestClose={() => setItemFocused({} as Item)}
          />
        </section>
      ) : null}
    </main>
  );
}
