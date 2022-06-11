import styles from "./styles.module.scss";

interface ItemDetailTileProps {
  title: string;
  info: string;
  highlightInfo?: string;
}

export function ItemDetailTile(props: ItemDetailTileProps) {
  return (
    <div className={styles.itemDetailTile}>
      <span>{props.title}</span>
      <strong>
        {props.info}
        {props.highlightInfo ? <span>{props.highlightInfo}</span> : null}
      </strong>
    </div>
  );
}
