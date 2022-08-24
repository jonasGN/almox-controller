import { useEffect, useState } from "react";
import { Item } from "../../@types/entities";
import { fetchItems } from "../../repositories/items";

import { OptionButton } from "../../components/Buttons";
import { AddIcon } from "../../components/Icons";
import { SearchBar } from "../../components/Inputs";
import { ItemCard } from "../../components/ItemCard";
import { PageHeader } from "../../components/PageHeader";
import { Loading } from "../../components/Loading";

import styles from "./styles.module.scss";

export const CatalogPage = (): JSX.Element => {
  const [items, setItems] = useState<Item[]>([]);

  useEffect(() => {
    fetchItems().then((data) => setItems(data));
  }, []);

  if (items.length === 0) return <Loading />;

  return (
    <>
      <PageHeader title="Catálogo">
        <OptionButton icon={<AddIcon />} />
        <SearchBar onSearch={(term) => {}} />
      </PageHeader>

      <div className={styles.contentContainer}>
        {items.map((item) => (
          <ItemCard key={item.id} item={item} />
        ))}
      </div>
    </>
  );
};
