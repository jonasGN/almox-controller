import { ItemRequest } from "../../@types/entities";
import { MainButton } from "../MainButton";
import { Modal } from "../Modal";

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
      <RequestItemLine
        title="Nome do item"
        contentInfo="Nome do item em até duas linhas completas"
      />
      <RequestItemLine
        title="Código solicitado"
        contentInfo={item.code}
        highlight
      />
      <RequestItemLine title="Mensagem" contentInfo={item.message} />
      <div className={styles.actions}>
        <MainButton title="Aceitar" />
        <MainButton title="Recusar" useAlert />
      </div>
    </Modal>
  );
}

interface RequestItemLineProps {
  title: string;
  contentInfo: string;
  highlight?: boolean;
}

function RequestItemLine(props: RequestItemLineProps) {
  const highlightClass = props.highlight
    ? styles.lineHighlight
    : styles.lineContentInfo;

  return (
    <>
      <span className={styles.lineTitle}>{props.title}</span>
      <p className={highlightClass}>{props.contentInfo}</p>
    </>
  );
}
