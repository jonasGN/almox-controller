import type { VoidCallback } from "@Types/aliases";
import React from "react";
import { useOverlayElement } from "@/hooks/element";

import { SplitButtonContainer } from "@/layout";
import { SecondaryButton } from "@/components/Buttons";

import styles from "./styles.module.scss";

type SaveItemCallback = (formData: FormData) => Promise<void>;

interface ItemFormProps {
  onClickSave: SaveItemCallback;
  onClickCancel: VoidCallback;
  children?: React.ReactNode;
}

export const ItemForm = (props: ItemFormProps): JSX.Element => {
  const { onClickSave, onClickCancel, children } = props;

  const { isVisible, onOpenElement, onCloseElement } = useOverlayElement();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    // show user that api request it's processing
    const formData = new FormData(e.target as HTMLFormElement);
    // const entries = Object.fromEntries(formData.entries());
    await onClickSave(formData);
    // remove the load element when success
  };

  const handleCancel = (e: React.FormEvent) => {
    onClickCancel();
  };

  let elements = React.Children.toArray(children) as React.ReactElement[];
  const basicInfoElement = elements.find((el) => el.props.sectionId === "basic-info");
  const locationElement = elements.find((el) => el.props.sectionId === "location");
  const imageElement = elements.find((el) => el.props.sectionId === "image");

  // clean elements array because is not more necessary at this stage
  elements = [];

  return (
    <>
      <form className={styles.form} onSubmit={handleSubmit} onReset={handleCancel}>
        <section>{basicInfoElement}</section>

        <section>
          {locationElement}
          {imageElement}

          <SplitButtonContainer className={styles.actions}>
            <SecondaryButton
              title="cancelar"
              type="indiferent"
              behaviorType="reset"
              // disabled
            />
            <SecondaryButton
              title="Salvar"
              behaviorType="submit"
              // disabled
            />
          </SplitButtonContainer>
        </section>
      </form>
    </>
  );
};
