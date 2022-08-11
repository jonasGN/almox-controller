import { MouseEventHandler } from "react";
import { Item } from "../../@types/entities";
import { toCurrency } from "../../utils/formatters";
import { classNameWhen, multipleClasses } from "../../utils/styles-helper";

import { ItemImage } from "../ItemImage";
import { ItemUnavailableFeedback } from "../ItemUnavailableFeedback";
import { ShowWhen } from "../ShowWhen";

import styles from "./styles.module.scss";

interface ItemCardProps {
  item: Item;
  onClick: MouseEventHandler<HTMLAnchorElement>;
}

export const ItemCard = (props: ItemCardProps): JSX.Element => {
  const { item, onClick } = props;

  const isItemAvailable = item.status !== "UNAVAILABLE" && item.amountAvailable > 0;

  const unavailableClass = classNameWhen(!isItemAvailable, styles.unavailable);
  const className = multipleClasses(styles.card, unavailableClass);

  return (
    <a className={className} onClick={onClick}>
      <div className={styles.image}>
        <ItemImage item={item} aspectRatio="standard" />
        <ShowWhen condition={!isItemAvailable}>
          <ItemUnavailableFeedback />
        </ShowWhen>
      </div>
      <div className={styles.content}>
        <strong>Código: {item.code}</strong>
        <p>{item.name}</p>
        <span>{toCurrency(item.unitPrice)}</span>
      </div>
    </a>
  );
};
