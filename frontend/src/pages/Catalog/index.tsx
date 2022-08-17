import { OptionButton } from "../../components/Buttons";
import { Icons } from "../../components/Icons";
import { SearchBar } from "../../components/Inputs";
import { ItemCard } from "../../components/ItemCard";
import { PageTitle } from "../../components/PageTitle";
import { PageContainer } from "../../components/PageContainer";

import styles from "./styles.module.scss";

const items = new Array(40).map((item) => {
  return "item";
});

export const CatalogPage = (): JSX.Element => {
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
        {items.map((item) => {
          return (
            <ItemCard
              item={{
                code: "9988776655",
                name: "item A",
                price: 99,
                image: "item image",
              }}
            />
          );
        })}
      </div>
    </PageContainer>
  );
};
