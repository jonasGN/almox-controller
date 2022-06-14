import { Item } from "../../@types/entities";
import { classNameByCondition } from "../../utils/css-helper";
import { toCurrency } from "../../utils/formatters";
import { ItemImage } from "../ItemImage";
import { ItemUnavailableFeedback } from "../ItemUnavailableFeedback";

import styles from "./styles.module.scss";

interface ItemCardProps {
  item: Item;
  isFocused: boolean;
  onClick: React.MouseEventHandler<HTMLAnchorElement>;
}

export function ItemCard({ item, ...props }: ItemCardProps) {
  const isItemAvailable = item.status !== "UNAVAILABLE" && item.amountAvailable > 0;
  const unavailableClass = classNameByCondition(!isItemAvailable, styles.unavailable);

  return (
    <a className={`${styles.card} ${unavailableClass}`} onClick={props.onClick}>
      <div className={styles.image}>
        <ItemImage item={item} aspectRatio="standard" />
        {isItemAvailable ? null : <ItemUnavailableFeedback />}
      </div>
      <div className={styles.content}>
        <strong>Código: {item.code}</strong>
        <p>{item.name}</p>
        <span>{toCurrency(item.unitPrice)}</span>
      </div>
    </a>
  );
}
