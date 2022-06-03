import styles from "./styles.module.scss";

interface FormFieldProps {
  useTextArea?: boolean;
}

export function FormField(props: FormFieldProps) {
  if (props.useTextArea) {
    return (
      <div className={styles.fieldContainer}>
        <textarea name="" id=""></textarea>
        <label htmlFor="">Label</label>
      </div>
    );
  }

  return (
    <div className={styles.fieldContainer}>
      <input type="text" name="" id="" placeholder="Input" />
      <label htmlFor="">Label</label>
    </div>
  );
}
