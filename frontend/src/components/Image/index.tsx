import type { ReactImgElement } from "@Types/elements";
import { useState } from "react";
import { classNames } from "@/utils/styles";

import styles from "./styles.module.scss";

export type AspectRatio = "standard" | "square" | "widescreen";

interface ImageProps extends ReactImgElement {
  src: string;
  aspectRatio?: AspectRatio;
}

const errorImage = "/images/image-error.svg";
const loadImage = "/images/image-placeholder.svg";

export const Image = (props: ImageProps): JSX.Element => {
  const { src, aspectRatio, ...rest } = props;

  const [image, setImage] = useState(src);

  const handleImageSrc = () => setImage(errorImage);
  // const handleLoadImageSrc = () => setImage(src);

  const aspectRatioClass = (): string => {
    switch (aspectRatio) {
      case "square":
        return styles.square;
      case "widescreen":
        return styles.widescreen;
      default:
        return styles.standard;
    }
  };

  const isPlaceholderImage = image === errorImage;

  const classes = classNames(
    styles.wrapper,
    aspectRatioClass(),
    isPlaceholderImage ? styles.placeholder : ""
  );

  return (
    <div className={classes}>
      <img
        src={image}
        onError={rest.onError ?? handleImageSrc}
        // onLoad={rest.onLoad ?? handleLoadImageSrc}
        loading="lazy"
        {...rest}
      />
    </div>
  );
};
