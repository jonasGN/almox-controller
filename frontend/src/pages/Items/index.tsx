import { useEffect, useState } from "react";
import { Item } from "../../@types/entities";
import { api } from "../../services/api";

import { ItemCard } from "../../components/ItemCard";
import { SearchBar } from "../../components/SearchBar";
import { ItemDetailsModal } from "../../components/ItemDetailsModal";

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

  function handleItemFocused(itemId: number) {
    const itemFocused = items.find((item) => item.id === itemId);

    if (!itemFocused) return;
    setItemFocused(itemFocused);
  }

  function clearItemFocused() {
    setItemFocused({} as Item);
  }

  function handleEditItem() {
    console.log(`Editing item: ${itemFocused.code}`);
  }

  const hasItemFocused = Object.keys(itemFocused).length !== 0;

  return (
    <main className={styles.container}>
      <SearchBar />
      <section className={styles.itemsSection}>
        {items.map((item) => (
          <ItemCard
            key={item.id}
            item={item}
            isFocused={item.id === itemFocused.id}
            onClick={() => handleItemFocused(item.id)}
          />
        ))}
      </section>

      <ItemDetailsModal
        isOpen={hasItemFocused}
        item={itemFocused}
        onRequestEditItem={handleEditItem}
        onRequestClose={clearItemFocused}
      />
    </main>
  );
}
