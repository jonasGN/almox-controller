import styles from "./styles.module.scss";

interface TitleTileProps {
  title: string;
}

export function TitleTile({ title }: TitleTileProps) {
  return <div className={styles.container}>{title}</div>;
}
