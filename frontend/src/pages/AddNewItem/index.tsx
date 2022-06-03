import { FormField } from "../../components/FormField";
import { MainButton } from "../../components/MainButton";
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
          <div className={styles.spliter}>
            <FormField />
            <FormField />
          </div>
          <div className={styles.sectionDivider}>Localização</div>
          <div className={styles.spliter}>
            <FormField />
            <FormField />
            <FormField />
          </div>
          <div className={`${styles.spliter} ${styles.buttonsContainer}`}>
            <MainButton title="Limpar" useAlert={true} />
            <MainButton title="Adicionar" />
          </div>
        </form>
      </section>
      <section className={styles.imageSection}>
        <TitleTile title="Imagem" />
      </section>
    </main>
  );
}
