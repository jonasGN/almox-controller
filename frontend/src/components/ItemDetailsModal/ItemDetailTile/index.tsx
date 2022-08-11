import { ShowWhen } from "../../ShowWhen";

import styles from "./styles.module.scss";

interface ItemDetailTileProps {
  title: string;
  info: string;
  highlightInfo?: string;
}

export const ItemDetailTile = (props: ItemDetailTileProps): JSX.Element => {
  const { info, title, highlightInfo } = props;

  return (
    <div className={styles.itemDetailTile}>
      <span>{title}</span>
      <strong>
        {info}
        <ShowWhen condition={!!highlightInfo}>
          <span>{highlightInfo}</span>
        </ShowWhen>
      </strong>
    </div>
  );
};
