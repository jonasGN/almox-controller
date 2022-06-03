import { FormField } from "../../components/FormField";
import { TitleTile } from "../../components/TitleTile";

import styles from "./styles.module.scss";

export default function AddNewItemPage() {
  return (
    <main className={styles.grid}>
      <TitleTile title="Adicionar novo item" />
      <section className={styles.formContainer}>
        <TitleTile title="Informações básicas" />
        <form action="">
          <FormField />
          <FormField useTextArea={true} />
          <div className={styles.splitField}>
            <FormField />
            <FormField />
          </div>
          <div className={styles.sectionDivider}>Localização</div>
          <div className={styles.splitField}>
            <FormField />
            <FormField />
            <FormField />
          </div>
        </form>
      </section>
      <section className={styles.imageSection}>
        <TitleTile title="Imagem" />
      </section>
    </main>
  );
}
