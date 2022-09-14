import { FormInputsContainer, FormSpliter } from "../../../layout/FormLayout";
import { TextField } from "../../Inputs";
import { ItemFormHeader } from "../ItemFormHeader";

import styles from "./styles.module.scss";

interface ItemFormBasicInformationProps {}

export const ItemFormBasicInformation = (
  props: ItemFormBasicInformationProps
): JSX.Element => {
  const {} = props;

  return (
    <div>
      <ItemFormHeader
        title="Informações básicas"
        subtitle="Informações principais do item"
      />

      <FormInputsContainer>
        <TextField name="name" label="Nome" />
        <TextField name="description" label="Descrição" />

        <FormSpliter>
          <TextField name="price" label="Preço" />
          <TextField name="quantity" label="Quant. inicial" />
        </FormSpliter>

        <TextField name="category" label="Categoria" />
      </FormInputsContainer>
    </div>
  );
};
