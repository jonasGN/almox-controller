import { FormSubjectContainer } from "../../layout/FormLayout";
import { SplitButton } from "../Buttons";
import { ItemFormBasicInformation } from "./ItemFormBasicInformation";
import { ItemFormImage } from "./ItemFormImage";
import { ItemFormLocation } from "./ItemFormLocation";

import styles from "./styles.module.scss";

interface ItemFormProps {}

export const ItemForm = (props: ItemFormProps): JSX.Element => {
  const {} = props;

  return (
    <form className={styles.form}>
      <ItemFormBasicInformation />
      <FormSubjectContainer>
        <ItemFormLocation />
        <ItemFormImage />
      </FormSubjectContainer>

      {/* <SplitButton /> */}
    </form>
  );
};
