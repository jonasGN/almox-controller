import { useState } from "react";
import { toCurrency } from "../../utils/formatters";

import styles from "./styles.module.scss";

interface Item {
  code: string;
  name: string;
  price: number;
  image: string;
}

interface ItemCardProps {
  item: Item;
}

export const ItemCard = (props: ItemCardProps): JSX.Element => {
  const { item } = props;

  const [itemImage, setItemImage] = useState(item.image);

  const priceFormatted = toCurrency(item.price);

  return (
    <a href="" className={styles.itemCardContainer}>
      <div className={styles.itemImageContainer}>
        <img
          src={itemImage}
          alt={item.name}
          onError={() => setItemImage("images/image-error.svg")}
        />
      </div>

      <div className={styles.itemDetailsContainer}>
        <span>Código: {item.code}</span>
        <p>{item.name}</p>
        <strong>{priceFormatted}</strong>
      </div>
    </a>
  );
};
