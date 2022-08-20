import { classNames } from "../../../utils/styles-helper";

import { Image } from "../../../components/Image";
import { OptionButton } from "../../../components/Buttons";
import { ExpandImageIcon } from "../../../components/Icons";

import styles from "./styles.module.scss";

interface ImageGaleryProps {
  image: string;
  className?: string;
}

export const ImageGalery = (props: ImageGaleryProps): JSX.Element => {
  const { image, className } = props;

  const classes = classNames(styles.imageGaleryContainer, className!);

  return (
    <section className={classes}>
      <div className={styles.focusedImage}>
        <Image src={image} aspectRatio="standard" />
        <OptionButton
          icon={<ExpandImageIcon />}
          styleType="no-bg-default"
          onClick={() => {}}
        />
      </div>

      <div className={styles.otherImages}>
        <Image src={image} aspectRatio="square" />
        <Image src={image} aspectRatio="widescreen" />
      </div>
    </section>
  );
};
