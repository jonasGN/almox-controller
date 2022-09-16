import { ReactFileInputElement } from "@Types/elements";

import { AddIcon } from "../../Icons";

import styles from "./styles.module.scss";

interface ImageInputProps extends ReactFileInputElement {
  name: string;
}

export const ImageInput = (props: ImageInputProps): JSX.Element => {
  const { name, ...rest } = props;

  return (
    <label className={styles.imageInput}>
      <AddIcon />
      <input type="file" name={name} id={name} {...rest} />
    </label>
  );
};
