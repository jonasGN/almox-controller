import { FormInputsContainer, FormSpliter } from "@/layout/FormLayout";
import { SelectInput, SelectOption, TextArea, TextField } from "../../Inputs";
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

        <SelectInput name="category" label="Categoria" defaultValue={0}>
          <SelectOption value="" title="Nenhuma" />
          <SelectOption value={0} title="Categoria A" />
          <SelectOption value={1} title="Categoria B" />
          <SelectOption value={2} title="Categoria C" />
          <SelectOption value={3} title="Categoria D" />
        </SelectInput>
      </FormInputsContainer>
    </div>
  );
};
