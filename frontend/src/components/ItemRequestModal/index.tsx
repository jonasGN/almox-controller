import { ItemRequest } from "../../@types/entities";
import { MainButton } from "../MainButton";
import { Modal } from "../Modal";
import { RequestItemLine } from "./RequestItemLine";

import styles from "./styles.module.scss";

interface ItemRequestModalProps {
  isOpen: boolean;
  onRequestClose: () => void;
  itemRequested: ItemRequest;
}

export function ItemRequestModal(props: ItemRequestModalProps) {
  const { requestedItem: item } = props.itemRequested;

  if (!item) return null;

  return (
    <Modal
      title="Item solicitado"
      isOpen={props.isOpen}
      onRequestClose={props.onRequestClose}
      className={styles.content}
      useMaxWidth
    >
      <RequestItemLine title="Nome do item" contentInfo={item.name} />
      <RequestItemLine title="Código solicitado" contentInfo={item.code} highlight />
      <RequestItemLine title="Mensagem" contentInfo={item.message} />
      <div className={styles.actions}>
        <MainButton title="Aceitar" onClick={() => {}} />
        <MainButton title="Recusar" onClick={() => {}} useAlert />
      </div>
    </Modal>
  );
}
