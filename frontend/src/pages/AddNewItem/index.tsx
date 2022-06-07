import { FormField } from "../../components/FormField";
import { MainButton } from "../../components/MainButton";
import { TitleTile } from "../../components/TitleTile";
import { UploadImageBox } from "../../components/UploadImageBox";

import styles from "./styles.module.scss";

export default function AddNewItemPage() {
  return (
    <main className={styles.grid}>
      <h1>Adicionar novo item</h1>
      <section className={styles.formSection}>
        <TitleTile title="Informações básicas" useElementPadding={true} />
        <form action="">
          <FormField name="name" label="Nome" placeholder="Nome simplificado" />
          <FormField
            name="description"
            label="Descrição"
            placeholder="Uma simples descrição a respeito do item"
            useTextArea={true}
          />
          <div className={styles.spliter}>
            <FormField
              name="price"
              type="number"
              label="Preço"
              placeholder="0,00"
              prefix="R$"
            />
            <FormField
              name="initialAmount"
              type="number"
              label="Quant. Inicial"
              placeholder="00"
              prefix="uni"
            />
          </div>
          <TitleTile title="Localização" />
          <div className={styles.spliter}>
            <FormField name="hall" label="Corredor" placeholder="00" />
            <FormField name="shelf" label="Prateleira" placeholder="00" />
            <FormField name="block" label="Bloco" placeholder="00" />
          </div>
          <div className={`${styles.spliter} ${styles.buttonsContainer}`}>
            <MainButton title="Limpar" useAlert={true} />
            <MainButton title="Adicionar" />
          </div>
        </form>
      </section>

      <section className={styles.imageSection}>
        <TitleTile title="Imagem" />
        <UploadImageBox />
      </section>
    </main>
  );
}
