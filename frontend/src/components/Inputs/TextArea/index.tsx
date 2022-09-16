import { forwardRef, ForwardRefRenderFunction } from "react";
import { ReactTextAreaElement } from "@Types/elements";

import { BaseInput } from "../BaseInput";

import styles from "./styles.module.scss";

interface TextAreaProps extends ReactTextAreaElement {
  name: string;
  label: string;
}

type ForwardRefFunction = ForwardRefRenderFunction<HTMLTextAreaElement, TextAreaProps>;

const TextAreaBase: ForwardRefFunction = (props, ref): JSX.Element => {
  const { name, label, ...rest } = props;

  return (
    <BaseInput name={name} label={label} customClassName={styles.textArea}>
      <textarea ref={ref} name={name} id={name} {...rest} />
    </BaseInput>
  );
};

export const TextArea = forwardRef(TextAreaBase);
