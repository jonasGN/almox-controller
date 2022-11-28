import { FormSubjectContainer } from "@/layout/FormLayout";
import { SplitButtonContainer, SplitButton } from "@/components/Buttons";

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
        <SplitButton
          predefinedTitles="cancelar"
          buttonStyle="cancel"
          onClick={onCancelForm}
        />
        <SplitButton type="submit" title="Salvar" />
      </SplitButtonContainer>
    </FormSubjectContainer>
  );
};
