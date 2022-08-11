import { MouseEventHandler } from "react";

import { IconButton } from "../../IconButton";
import { TitleTile } from "../../TitleTile";
import { DeleteButton } from "./DeleteButton";

import styles from "./styles.module.scss";

type ButtonEventHandler = MouseEventHandler<HTMLButtonElement>;

interface FormHeaderProps {
  disableSave?: boolean;
  disableDelete?: boolean;
  onSaveItem: ButtonEventHandler;
  onDeleteItem?: ButtonEventHandler;
}

export const FormHeader = (props: FormHeaderProps): JSX.Element => {
  const { onSaveItem, disableDelete, disableSave, onDeleteItem } = props;

  return (
    <header className={styles.header}>
      <TitleTile title="Informações básicas" />
      <div className={styles.actionContainer}>
        <DeleteButton disableDelete={disableDelete} onDeleteItem={onDeleteItem} />
        <IconButton
          icon="/public/icons/save.svg"
          onClick={onSaveItem}
          alt="Salvar item"
          disabled={disableSave}
        />
      </div>
    </header>
  );
};
