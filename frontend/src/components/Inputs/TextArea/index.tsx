import { forwardRef, ForwardRefRenderFunction, useState } from "react";
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

  const [count, setCount] = useState(0);

  const onChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setCount(e.target.value.length);
    // TODO: call rest.onChange function too
  };

  const counterElement = (
    <span className={styles.counter}>
      {count}/{rest.maxLength}
    </span>
  );

  return (
    <BaseInput
      name={name}
      label={label}
      customClassName={styles.input}
      textCounterElement={rest.maxLength ? counterElement : undefined}
    >
      <textarea {...rest} ref={ref} name={name} id={name} onChange={onChange} />
    </BaseInput>
  );
};

export const TextArea = forwardRef(TextAreaBase);
