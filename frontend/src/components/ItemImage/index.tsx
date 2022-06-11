import { useState } from "react";
import { Item } from "../../@types/entities";

import styles from "./styles.module.scss";

interface ItemImageProps {
  item: Item;
  aspectRatio?: "widescreen" | "standard" | "square";
}

export function ItemImage(props: ItemImageProps) {
  const { image, name, amountAvailable, status } = props.item;
  const [imageSrc, setImageSrc] = useState(image);

  function handleOnErrorImage() {
    setImageSrc("/public/images/default-item-image.png");
  }

  function handleAspectRatio(): string {
    switch (props.aspectRatio) {
      case "standard":
        return "4 / 3";
      case "square":
        return "1";
      case "widescreen":
      default:
        return "16 / 9";
    }
  }

  const isItemAvailable = status === "AVAILABLE" && amountAvailable > 0;
  const unavailableItemClass = !isItemAvailable ? styles.itemUnavailable : "";

  return (
    <img
      className={`${styles.image} ${unavailableItemClass}`}
      src={imageSrc}
      alt={name}
      style={{ aspectRatio: handleAspectRatio() }}
      onError={handleOnErrorImage}
    />
  );
}
