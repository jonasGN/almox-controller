import type { ReactSelectInputElement } from "@Types/elements";
import { ArrowDropDownIcon } from "@/components/Icons";
import { BaseInput } from "../../BaseInput";

import styles from "./styles.module.scss";

interface SelectInputProps extends ReactSelectInputElement {
  name: string;
  label: string;
  children: React.ReactNode;
}

export const SelectInput = (props: SelectInputProps): JSX.Element => {
  const { name, label, children } = props;

  return (
    <BaseInput name={name} label={label} trailingElement={<ArrowDropDownIcon />}>
      <select name={name} id={name} className={styles.select}>
        {children}
      </select>
    </BaseInput>
  );
};
