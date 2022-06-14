import { ItemForm } from "../../components/ItemForm";

import styles from "./styles.module.scss";

export default function AddNewItemPage() {
  function handleSaveItem() {}

  return (
    <main className={styles.container}>
      <h1>Adicionar novo item</h1>
      <section>
        <ItemForm onSaveItem={handleSaveItem} />
      </section>
    </main>
  );
}
