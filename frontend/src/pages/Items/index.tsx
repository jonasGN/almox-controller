import { useEffect, useState } from "react";

import { ItemCard } from "../../components/ItemCard";
import { ItemDetailsCard } from "../../components/ItemDetailsCard";
import { SearchBar } from "../../components/SearchBar";

import { Item } from "../../@types/entities";
import { api } from "../../services/api";

import styles from "./styles.module.scss";

export default function ItemsPage() {
  const [items, setItems] = useState<Item[]>([]);
  const [itemFocused, setItemFocused] = useState<Item>({} as Item);

  useEffect(() => {
    async function loadItems() {
      const response = await api.get<Item[]>("items");
      const data = response.data.map((item) => ({
        ...item,
        unitPrice: item.unitPrice / 100,
      }));

      setItems(data);
    }

    loadItems();
  }, []);

  function handleCardFocused(itemId: number) {
    const itemFocused = items.find((item) => item.id === itemId);

    if (!itemFocused) return;
    setItemFocused(itemFocused);
  }

  const isItemFocused = Object.keys(itemFocused).length !== 0;
  const focusedSectionClass = isItemFocused ? styles.shrink : "";

  return (
    <main className={styles.grid}>
      <section className={`${styles.itemsSection} ${focusedSectionClass}`}>
        <SearchBar />
        {items.map((item) => {
          return (
            <ItemCard
              key={item.id}
              item={item}
              isFocused={item.id === itemFocused.id}
              onClick={() => handleCardFocused(item.id)}
            />
          );
        })}
      </section>

      <ItemDetailsCard
        item={itemFocused}
        isVisible={isItemFocused}
        onRequestClose={() => setItemFocused({} as Item)}
      />
    </main>
  );
}
