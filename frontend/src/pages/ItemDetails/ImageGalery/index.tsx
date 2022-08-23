import { classNames } from "../../../utils/styles-helper";
import { useModal } from "../../../contexts/ModalContext";

import { Image } from "../../../components/Image";
import { OptionButton } from "../../../components/Buttons";
import { ExpandImageIcon } from "../../../components/Icons";
import { ImageModal } from "../../../components/Modals";

import styles from "./styles.module.scss";

interface ImageGaleryProps {
  image: string;
  className?: string;
}

export const ImageGalery = (props: ImageGaleryProps): JSX.Element => {
  const { image, className } = props;

  const { isOpen, modalRef, onCloseModal, onOpenModal } = useModal();

  const classes = classNames(styles.imageGaleryContainer, className!);

  return (
    <>
      <section className={classes}>
        <div className={styles.focusedImage}>
          <Image src={image} aspectRatio="standard" />
          <OptionButton
            icon={<ExpandImageIcon />}
            styleType="no-bg-default"
            onClick={onOpenModal}
          />
        </div>

        <div className={styles.otherImages}>
          <Image src={image} aspectRatio="square" />
          <Image src={image} aspectRatio="widescreen" />
        </div>
      </section>

      <ImageModal
        src={image}
        isOpen={isOpen}
        modalRef={modalRef}
        onCloseModal={onCloseModal}
      />
    </>
  );
};
