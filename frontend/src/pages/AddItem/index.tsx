import { PageHeader } from "../../components/PageHeader";
import { ItemForm } from "../../components/ItemForm";

import styles from "./styles.module.scss";

export const AddItemPage = (): JSX.Element => {
  return (
    <>
      <PageHeader title="Novo item" />

      <ItemForm />
    </>
  );
};
