import { useState } from "react";
import { Link } from "react-router-dom";
import { Paths } from "../../routes";
import { classNames } from "../../utils/styles-helper";

import { UnavailableChip } from "../UnavailableChip";

import styles from "./styles.module.scss";

interface Item {
  id: number;
  name: string;
  code: string;
  priceFormatted: string;
  image: string;
  status: string;
}

interface ItemCardProps {
  item: Item;
}

const errorImage = "/images/image-error.svg";

export const ItemCard = (props: ItemCardProps): JSX.Element => {
  const { item } = props;

  const [itemImage, setItemImage] = useState(item.image);

  const isUnavailable = item.status !== "AVAILABLE";

  const itemDetailsContainerClasses = classNames(
    styles.itemDetailsContainer,
    isUnavailable ? styles.unvailable : ""
  );

  return (
    <Link to={`${Paths.ITEMS}/${item.id}`} className={styles.itemCardContainer}>
      <div className={styles.itemImageContainer}>
        <img src={itemImage} alt={item.name} onError={() => setItemImage(errorImage)} />
        <UnavailableChip isUnavailable={isUnavailable} />
      </div>

      <div className={itemDetailsContainerClasses}>
        <span>Código: {item.code}</span>
        <p>{item.name}</p>
        <strong>{item.priceFormatted}</strong>
      </div>
    </Link>
  );
};
