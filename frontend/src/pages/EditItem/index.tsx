import { ItemForm } from "../../components/ItemForm";

import styles from "./styles.module.scss";

export default function EditItem() {
  const formConfig = { labels: { amount: "Quant. em estoque" } };

  function handleSaveItem() {}

  function handleDeleteItem() {}

  return (
    <main className={styles.container}>
      <h1>Editar item</h1>
      <section>
        <ItemForm
          onSaveItem={handleSaveItem}
          onDeleteItem={handleDeleteItem}
          config={formConfig}
        />
      </section>
    </main>
  );
}
