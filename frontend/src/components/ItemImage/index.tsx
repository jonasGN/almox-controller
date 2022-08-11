import { useMemo, useState } from "react";
import { Item } from "../../@types/entities";

import styles from "./styles.module.scss";

type AspectRatio = "widescreen" | "standard" | "square";

interface ItemImageProps {
  item: Item;
  aspectRatio?: AspectRatio;
}

const errorImage = "/public/images/default-item-image.png";

export const ItemImage = (props: ItemImageProps): JSX.Element => {
  const { image, name, amountAvailable, status } = props.item;

  const [imageSrc, setImageSrc] = useState(image);

  const aspectRatio = useMemo(() => {
    const aspect = props.aspectRatio;

    if (aspect === "standard") return "4 / 3";
    if (aspect === "square") return "1";

    return "16 / 9";
  }, [props.aspectRatio]);

  const isItemAvailable = status === "AVAILABLE" && amountAvailable > 0;
  const unavailableItemClass = !isItemAvailable ? styles.itemUnavailable : "";

  return (
    <img
      className={`${styles.image} ${unavailableItemClass}`}
      src={imageSrc}
      alt={name}
      style={{ aspectRatio }}
      onError={() => setImageSrc(errorImage)}
    />
  );
};
