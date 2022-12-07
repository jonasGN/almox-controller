import { FormInputsContainer, FormSpliter } from "@/layout/FormLayout";
import { TextArea, TextField } from "../../Inputs";
import { ItemFormHeader } from "../ItemFormHeader";

interface ItemFormBasicInformationProps {}

// TODO: review this component
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
        <TextField
          name="name"
          label="Nome"
          required
          defaultValue="Produto de teste"
          // pattern="^[A-Za-z0-9]{3,40}$"
        />
        <TextArea
          name="description"
          label="Descrição"
          required
          maxLength={150}
          defaultValue="Um simples produto de teste "
        />

        <FormSpliter>
          <TextField
            name="price"
            label="Preço"
            prefix="R$"
            type="number"
            required
            defaultValue="99"
            // pattern="^[0-9]"
          />
          <TextField
            name="quantity"
            label="Quant. inicial"
            prefix="uni"
            type="number"
            pattern="^[0-9]"
            defaultValue="9"
          />
        </FormSpliter>
      </FormInputsContainer>
    </div>
  );
};
