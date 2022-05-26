import styles from "./styles.module.scss";

interface ItemUnavailableFeedbackProps {
  info?: string;
}

export function ItemUnavailableFeedback(props: ItemUnavailableFeedbackProps) {
  return (
    <div className={styles.feedbackTile} about="feedback-tile">
      {props.info ?? "Indisponível"}
    </div>
  );
}
