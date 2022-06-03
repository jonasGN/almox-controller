import styles from "./styles.module.scss";

interface MainButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  title: string;
  useAlert?: boolean;
}

export function MainButton(props: MainButtonProps) {
  const alertClass = props.useAlert ? styles.alert : "";

  return (
    <button className={`${styles.buttonContainer} ${alertClass}`}>
      {props.title}
    </button>
  );
}
