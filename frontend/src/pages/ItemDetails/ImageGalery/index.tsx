import { classNames } from "@/utils/styles";
import { useOverlayElement } from "@/hooks/element";

import { Image } from "@/components/Image";
import { OptionButton } from "@/components/Buttons";
import { ImageModal } from "@/components/Modals";

import styles from "./styles.module.scss";

interface ImageGaleryProps {
  image: string;
  className?: string;
}

export const ImageGalery = (props: ImageGaleryProps): JSX.Element => {
  const { image, className } = props;

  const { isVisible, elementRef, onOpenElement, onCloseElement } = useOverlayElement();

  const classes = classNames(styles.imageGaleryContainer, className!);

  return (
    <>
      <section className={classes}>
        <div className={styles.focusedImage}>
          <Image src={image} aspectRatio="standard" />
          <OptionButton icon="open-in-full" onClick={onOpenElement} />
        </div>

        <div className={styles.otherImages}>
          <Image src={image} aspectRatio="square" />
          <Image src={image} aspectRatio="widescreen" />
        </div>
      </section>

      <ImageModal
        ref={elementRef}
        src={image}
        isOpen={isVisible}
        onCloseModal={onCloseElement}
      />
    </>
  );
};
