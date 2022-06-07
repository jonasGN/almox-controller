import { ItemRequest } from "../../@types/entities";

import { MainButton } from "../MainButton";

import styles from "./styles.module.scss";

interface ItemRequestDetailsCardProps {
  itemRequest: ItemRequest;
}

export function ItemRequestDetailsCard(props: ItemRequestDetailsCardProps) {
  const { requestedItem } = props.itemRequest;

  return (
    <div className={styles.card}>
      <h2>Código solicitado</h2>
      <strong>{requestedItem.itemCode}</strong>

      <h2>Detalhes</h2>
      <p>{requestedItem.message}</p>

      <div className={styles.buttons}>
        <MainButton title="Aceitar" onClick={() => {}} />
        <MainButton title="Recusar" useAlert={true} onClick={() => {}} />
      </div>
    </div>
  );
}
