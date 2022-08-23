import { useEffect, useState } from "react";
import { Item } from "../../@types/entities";
import { fetchItems } from "../../repositories/items";

import { OptionButton } from "../../components/Buttons";
import { AddIcon } from "../../components/Icons";
import { SearchBar } from "../../components/Inputs";
import { ItemCard } from "../../components/ItemCard";
import { PageHeader } from "../../components/PageHeader";
import { ShowWhen } from "../../layout";

import styles from "./styles.module.scss";

export const CatalogPage = (): JSX.Element => {
  const [items, setItems] = useState<Item[]>([]);

  useEffect(() => {
    fetchItems().then((data) => setItems(data));
  }, []);

  return (
    <>
      <PageHeader title="Catálogo">
        <OptionButton icon={<AddIcon />} />
        <SearchBar onSearch={(term) => {}} />
      </PageHeader>

      <div className={styles.contentContainer}>
        <ShowWhen condition={items.length === 0}>
          <span>Carregando...</span>
        </ShowWhen>

        {items.map((item) => (
          <ItemCard key={item.id} item={item} />
        ))}
      </div>
    </>
  );
};
