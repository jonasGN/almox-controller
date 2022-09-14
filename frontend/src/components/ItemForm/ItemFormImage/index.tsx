import { FormInputsContainer } from "../../../layout/FormLayout";
import { ItemFormHeader } from "../ItemFormHeader";

import styles from "./styles.module.scss";

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
        <input type="file" name="image" id="image" />
      </FormInputsContainer>
    </div>
  );
};
