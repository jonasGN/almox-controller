import { FormInputsContainer, FormSpliter } from "@/layout/FormLayout";
import { TextField } from "../../Inputs";
import { ItemFormHeader } from "../ItemFormHeader";

interface ItemFormLocationProps {}

// TODO: review this component
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
          <TextField name="hall" label="Corredor" required defaultValue="CORR02" />
          <TextField name="shelf" label="Prateleira" required defaultValue="PRAT02" />
        </FormSpliter>

        <FormSpliter>
          <TextField name="column" label="Coluna" required defaultValue="COLU02" />
        </FormSpliter>
      </FormInputsContainer>
    </div>
  );
};
