import { useState } from "react";
import { classNames } from "../../utils/styles-helper";

import { UnavailableChip } from "../UnavailableChip";

import styles from "./styles.module.scss";

interface Item {
  code: string;
  name: string;
  priceFormatted: string;
  image: string;
  status: string;
}

interface ItemCardProps {
  item: Item;
}

const errorImage = "images/image-error.svg";

export const ItemCard = (props: ItemCardProps): JSX.Element => {
  const { item } = props;

  const [itemImage, setItemImage] = useState(item.image);

  const isUnavailable = item.status !== "AVAILABLE";

  const itemDetailsContainerClasses = classNames(
    styles.itemDetailsContainer,
    isUnavailable ? styles.unvailable : ""
  );

  return (
    <a href="" className={styles.itemCardContainer}>
      <div className={styles.itemImageContainer}>
        <img src={itemImage} alt={item.name} onError={() => setItemImage(errorImage)} />
        <UnavailableChip isUnavailable={isUnavailable} />
      </div>

      <div className={itemDetailsContainerClasses}>
        <span>Código: {item.code}</span>
        <p>{item.name}</p>
        <strong>{item.priceFormatted}</strong>
      </div>
    </a>
  );
};
