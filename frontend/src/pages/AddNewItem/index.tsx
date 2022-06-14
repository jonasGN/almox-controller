import { ItemForm } from "../../components/ItemForm";

import styles from "./styles.module.scss";

export default function AddNewItemPage() {
  function handleSaveItem() {}

  function handleDeleteItem() {}

  return (
    <main className={styles.grid}>
      <h1>Adicionar novo item</h1>
      <section className={styles.formSection}>
        <ItemForm onSaveItem={handleSaveItem} onDeleteItem={handleDeleteItem} />
      </section>
    </main>
  );
}
