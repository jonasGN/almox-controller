import { toLocaleDate } from "../../utils/formatters";
import { UserAvatar } from "../UserAvatar";

import styles from "./styles.module.scss";

interface UserHeaderTileProps {
  id: number;
  name: string;
  companyId: string;
  actionDate?: Date;
}

export function UserHeaderTile(props: UserHeaderTileProps) {
  return (
    <header className={styles.userHeader}>
      <UserAvatar userName={props.name} />
      <div className={styles.userInfo}>
        <p>{props.name}</p>
        <strong>{props.companyId}</strong>
      </div>
      <span className={styles.date}>{toLocaleDate(props.actionDate!)}</span>
    </header>
  );
}
