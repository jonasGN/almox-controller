import { FormInputsContainer } from "@/layout/FormLayout";
import { ImageInput } from "../../Inputs";
import { ItemFormHeader } from "../ItemFormHeader";

interface ItemFormImageProps {}

export const ItemFormImage = (props: ItemFormImageProps): JSX.Element => {
  const {} = props;

  return (
    <div>
      <ItemFormHeader
        title="Imagem"
        subtitle="A imagem do item deve ser ajustável a disferentes tamanhos"
      />

      <FormInputsContainer>
        <ImageInput name="itemImage" />
      </FormInputsContainer>
    </div>
  );
};
