import { forwardRef, ForwardRefRenderFunction } from "react";

import { Image } from "../../Image";
import { BaseModal, BaseModalProps } from "../BaseModal";

import styles from "./styles.module.scss";

interface ImageModalProps extends BaseModalProps {
  src: string;
  alt?: string;
}

type ForwardRefRender = ForwardRefRenderFunction<HTMLDivElement, ImageModalProps>;

const ImageModalBase: ForwardRefRender = (props, ref): JSX.Element => {
  const { src, alt, ...rest } = props;

  return (
    <BaseModal ref={ref} modalClassName={styles.imageModal} {...rest}>
      <Image src={src} alt={alt} aspectRatio="standard" />
    </BaseModal>
  );
};

export const ImageModal = forwardRef(ImageModalBase);
