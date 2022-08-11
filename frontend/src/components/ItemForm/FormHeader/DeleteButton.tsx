import { MouseEventHandler } from "react";
import { IconButton } from "../../IconButton";

type ButtonEventHandler = MouseEventHandler<HTMLButtonElement>;

interface DeleteButtonProps {
  disableDelete?: boolean;
  onDeleteItem?: ButtonEventHandler;
}

export const DeleteButton = (props: DeleteButtonProps): JSX.Element | null => {
  const { disableDelete, onDeleteItem } = props;

  if (!onDeleteItem) return null;

  return (
    <IconButton
      icon="/public/icons/delete.svg"
      onClick={onDeleteItem}
      alt="Deletar item"
      useWarning
      disabled={disableDelete}
    />
  );
};
