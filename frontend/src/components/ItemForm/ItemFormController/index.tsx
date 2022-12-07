import { FormSubjectContainer } from "@/layout/FormLayout";
import { SplitButtonContainer } from "@/layout";

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
        {/* use secondary button instead 
        <SplitButton
          predefinedTitles="cancelar"
          buttonStyle="cancel"
          onClick={onCancelForm}
        />
        <SplitButton type="submit" title="Salvar" /> */}
      </SplitButtonContainer>
    </FormSubjectContainer>
  );
};
