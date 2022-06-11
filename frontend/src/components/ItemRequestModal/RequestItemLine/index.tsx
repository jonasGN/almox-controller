import styles from "./styles.module.scss";

interface RequestItemLineProps {
  title: string;
  contentInfo: string;
  highlight?: boolean;
}

export function RequestItemLine(props: RequestItemLineProps) {
  const highlightClass = props.highlight
    ? styles.lineHighlight
    : styles.lineContentInfo;

  return (
    <>
      <span className={styles.lineTitle}>{props.title}</span>
      <p className={highlightClass}>{props.contentInfo}</p>
    </>
  );
}
