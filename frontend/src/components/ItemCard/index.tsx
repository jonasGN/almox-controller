import { useState } from "react";
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
  const [imageSrc, setImgSrc] = useState(item.image);

  const isItemAvailable = item.status !== "UNAVAILABLE" && item.amountAvailable > 0;

  const focusedClass = props.isFocused ? styles.focused : "";
  const unavailableClass = isItemAvailable ? "" : styles.unavailable;

  function handleOnErrorImage() {
    setImgSrc("/public/images/default-item-image.png");
  }

  return (
    <a
      className={`${styles.card} ${focusedClass} ${unavailableClass}`}
      onClick={props.onClick}
    >
      <div className={styles.image}>
        <img src={imageSrc} alt={item.name} onError={handleOnErrorImage} />
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
