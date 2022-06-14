import { IconButton } from "../../IconButton";
import { TitleTile } from "../../TitleTile";

import styles from "./styles.module.scss";

type ButtonEventHandler = React.MouseEventHandler<HTMLButtonElement>;

interface FormHeaderProps {
  onSaveItem: ButtonEventHandler;
  onDeleteItem?: ButtonEventHandler;
  disableSave?: boolean;
  disableDelete?: boolean;
}

export function FormHeader(props: FormHeaderProps) {
  function renderDeleteButton() {
    if (!props.onDeleteItem) return null;
    return (
      <IconButton
        icon="/public/icons/delete.svg"
        onClick={props.onDeleteItem}
        alt="Deletar item"
        useWarning
        disabled={props.disableDelete}
      />
    );
  }

  return (
    <header className={styles.header}>
      <TitleTile title="Informações básicas" />
      <div className={styles.actionContainer}>
        {renderDeleteButton()}
        <IconButton
          icon="/public/icons/save.svg"
          onClick={props.onSaveItem}
          alt="Salvar item"
          disabled={props.disableSave}
        />
      </div>
    </header>
  );
}
