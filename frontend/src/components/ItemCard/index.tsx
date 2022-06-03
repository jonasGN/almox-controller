import { Item } from "../../@types/entities";
import { toCurrency } from "../../utils/formatters";
import { ItemUnavailableFeedback } from "../ItemUnavailableFeedback";

import styles from "./styles.module.scss";

interface ItemCardProps {
  item: Item;
  isFocused: boolean;
  onClick: () => void;
}

export function ItemCard({ item, ...props }: ItemCardProps) {
  const isItemAvailable = item.amountAvailable > 0;

  const focusedClass = props.isFocused ? styles.focused : "";
  const unavailableClass = isItemAvailable ? "" : styles.unavailable;

  function renderUnavailableTile() {
    return isItemAvailable ? null : <ItemUnavailableFeedback />;
  }

  return (
    <a
      className={`${styles.card} ${focusedClass} ${unavailableClass}`}
      onClick={props.onClick}
    >
      <div className={styles.image}>
        <img src={item.image} alt={item.name} />
        {renderUnavailableTile()}
      </div>
      <div className={styles.content}>
        <p>{item.name}</p>
        <div>
          <span className={styles.price}>{toCurrency(item.unitPrice)}</span>
          <span className={styles.code}>{item.itemCode}</span>
        </div>
      </div>
    </a>
  );
}
