import { Image } from "../../Image";
import { BaseModalProps, Modal } from "../Modal";

import styles from "./styles.module.scss";

interface ImageModalProps extends BaseModalProps {
  src: string;
  alt?: string;
}

export const ImageModal = (props: ImageModalProps): JSX.Element => {
  const { src, alt, ...rest } = props;

  return (
    <Modal className={styles.imageModalContainer} {...rest}>
      <Image src={src} alt={alt} aspectRatio="standard" />
    </Modal>
  );
};
