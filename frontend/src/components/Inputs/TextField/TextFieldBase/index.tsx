import { BaseInput, BasicInputProps } from "../../BaseInput";

import styles from "./styles.module.scss";

interface TextFieldBaseProps extends BasicInputProps {
  prefix?: string;
  children: React.ReactNode;
}

export const TextFieldBase = (props: TextFieldBaseProps): JSX.Element => {
  const { prefix, leadingElement, children, ...rest } = props;

  const prefixElement = <span className={styles.prefix}>{prefix}</span>;

  return (
    <BaseInput
      {...rest}
      customClassName={styles.textField}
      leadingElement={prefix ? prefixElement : leadingElement}
      leadingElementClassName={prefix ? styles.prefix : undefined}
    >
      {children}
    </BaseInput>
  );
};
