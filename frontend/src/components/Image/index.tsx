import { useState } from "react";
import { ReactImgElement } from "../../@types/elements";
import { classNames } from "../../utils/styles-helper";

import styles from "./styles.module.scss";

export type AspectRatio = "standard" | "square" | "widescreen";

interface ImageProps extends ReactImgElement {
  src: string;
  aspectRatio?: AspectRatio;
}

const errorImage = "/images/image-error.svg";

export const Image = (props: ImageProps): JSX.Element => {
  const { src, aspectRatio, ...rest } = props;

  const [image, setImage] = useState(src);

  const handleImageSrc = () => setImage(errorImage);

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

  const classes = classNames(
    styles.image,
    aspectRatioClass(),
    image === errorImage ? styles.errorImage : ""
  );

  return (
    <img
      src={image}
      className={classes}
      onError={rest.onError ?? handleImageSrc}
      {...rest}
    />
  );
};
