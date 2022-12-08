import { FormSubjectContainer } from "@/layout/FormLayout";
import { SplitButtonContainer } from "@/layout";
import { SecondaryButton } from "@/components/Buttons";

interface ItemFormControllerProps {
  onCancelForm: () => void;
  children: React.ReactNode;
}

export const ItemFormController = (props: ItemFormControllerProps): JSX.Element => {
  const { onCancelForm, children } = props;

  return (
    <FormSubjectContainer>
      {children}

      <SplitButtonContainer>
        <SecondaryButton title="cancelar" type="indiferent" onClick={onCancelForm} />
        <SecondaryButton title="Salvar" behaviorType="submit" />
      </SplitButtonContainer>
    </FormSubjectContainer>
  );
};
