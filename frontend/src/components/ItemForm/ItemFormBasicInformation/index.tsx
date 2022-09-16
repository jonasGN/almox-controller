import { FormInputsContainer, FormSpliter } from "@/layout/FormLayout";
import { TextArea, TextField } from "../../Inputs";
import { ItemFormHeader } from "../ItemFormHeader";

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
        <TextArea name="description" label="Descrição" />

        <FormSpliter>
          <TextField name="price" label="Preço" />
          <TextField name="quantity" label="Quant. inicial" />
        </FormSpliter>

        <TextField name="category" label="Categoria" />
      </FormInputsContainer>
    </div>
  );
};
