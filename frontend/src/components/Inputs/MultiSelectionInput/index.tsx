import { useState } from "react";
import { useOverlayElement } from "@/hooks/element";

import { BaseInput } from "../BaseInput";
import { SelectionModal } from "@/components/Modals";
import { SelectionTile } from "@/components/SelectionTile";
import { RawButton, SecondaryButton } from "@/components/Buttons";
import { Icon } from "@/components/Icon";
import { SplitButtonContainer } from "@/layout";

import styles from "./styles.module.scss";

export interface SelectionItem {
  id: string;
  title: string;
  subtitle: string;
  value: string;
}

interface MultiSelectionInputProps {
  name: string;
  label: string;
  required?: boolean;
  items: Array<SelectionItem>;
  isLoading?: boolean;
}

// TODO: review this component
export const MultiSelectionInput = (props: MultiSelectionInputProps): JSX.Element => {
  const { name, label, required = false, isLoading, items } = props;

  const [value, setValue] = useState("");
  const { elementRef, isVisible, onCloseElement, onOpenElement } = useOverlayElement();

  let selectedOption = "";
  const handleSelectOption = (value: string) => {
    selectedOption = value;
  };

  const handleSaveSelection = () => {
    setValue(selectedOption);
    onCloseElement();
  };

  const handleCancelSelection = () => {
    setValue("");
    onCloseElement();
  };

  return (
    <>
      <BaseInput
        name={name}
        label={label}
        trailingElement={<Icon name="arrow-forward" />}
        customClassName={styles.selectionInput}
      >
        <RawButton id={name} name={name} onClick={onOpenElement} role="listitem">
          {value}
          <input type="hidden" id={name} name={name} value={value} />
        </RawButton>
      </BaseInput>

      <SelectionModal
        ref={elementRef}
        isOpen={isVisible}
        onCloseModal={onCloseElement}
        title="Seleciona uma categoria"
      >
        {items.map((item) => (
          <SelectionTile
            key={item.id}
            name={name}
            value={item.value}
            title={item.title}
            subtitle={item.subtitle}
            onClick={() => handleSelectOption(item.value)}
          />
        ))}

        <SplitButtonContainer className={styles.actionsContainer}>
          <SecondaryButton
            title="Cancelar"
            type="indiferent"
            onClick={handleCancelSelection}
          />
          <SecondaryButton
            title="Salvar"
            // disabled={!value}
            onClick={handleSaveSelection}
          />
        </SplitButtonContainer>
      </SelectionModal>
    </>
  );
};
