import { useState } from "react";
import { ReactImgElement } from "../../@types/elements";
import { classNames } from "../../utils/styles-helper";

import styles from "./styles.module.scss";

interface ImageProps extends ReactImgElement {
  src: string;
  aspectRatio?: "standard" | "square" | "widescreen";
}

export const Image = (props: ImageProps): JSX.Element => {
  const { src, aspectRatio, ...rest } = props;

  const [image, setImage] = useState(src);

  const handleImageSrc = () => setImage("/images/image-error.svg");

  const classes = (): string => {
    let aspect = "";

    switch (aspectRatio) {
      case "square":
        aspect = styles.square;
        break;
      case "widescreen":
        aspect = styles.widescreen;
        break;
      default:
        aspect = styles.standard;
    }

    return classNames(styles.imageContainer, aspect);
  };

  return (
    <>
      <img
        src={image}
        className={classes()}
        onError={rest.onError ?? handleImageSrc}
        {...rest}
      />
    </>
  );
};
