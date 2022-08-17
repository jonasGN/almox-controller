import { useEffect, useState } from "react";
import { Item } from "../../@types/entities";
import { fetchItems } from "../../repositories/items";

import { OptionButton } from "../../components/Buttons";
import { Icons } from "../../components/Icons";
import { SearchBar } from "../../components/Inputs";
import { ItemCard } from "../../components/ItemCard";
import { PageTitle } from "../../components/PageTitle";
import { PageContainer } from "../../components/PageContainer";
import { ShowWhen } from "../../components/Layout";

import styles from "./styles.module.scss";

export const CatalogPage = (): JSX.Element => {
  const [items, setItems] = useState<Item[]>([]);

  useEffect(() => {
    fetchItems().then((data) => setItems(data));
  }, []);

  return (
    <PageContainer contentClassName={styles.container}>
      <div className={styles.headerContainer}>
        <PageTitle title="Catálago" />

        <div className={styles.actionsContainer}>
          <OptionButton icon={Icons.add} />
          <SearchBar onSearch={(term) => {}} />
        </div>
      </div>

      <div className={styles.contentContainer}>
        <ShowWhen condition={items.length === 0}>
          <span>Carregando...</span>
        </ShowWhen>

        {items.map((item) => (
          <ItemCard key={item.id} item={item} />
        ))}
      </div>
    </PageContainer>
  );
};
