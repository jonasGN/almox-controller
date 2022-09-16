import { FormInputsContainer, FormSpliter } from "@/layout/FormLayout";
import { TextField } from "../../Inputs";
import { ItemFormHeader } from "../ItemFormHeader";

interface ItemFormLocationProps {}

export const ItemFormLocation = (props: ItemFormLocationProps): JSX.Element => {
  const {} = props;

  return (
    <div>
      <ItemFormHeader
        title="Localização"
        subtitle="Informe onde o item estará localizado no almoxarifado"
      />

      <FormInputsContainer>
        <FormSpliter>
          <TextField name="hall" label="Corredor" />
          <TextField name="shelf" label="Prateleira" />
        </FormSpliter>

        <FormSpliter>
          <TextField name="column" label="Coluna" />
        </FormSpliter>
      </FormInputsContainer>
    </div>
  );
};
