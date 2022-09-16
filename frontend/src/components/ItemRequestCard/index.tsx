import { Link } from "react-router-dom";
import { Paths } from "@/routes";

import { Avatar } from "../Avatar";

import styles from "./styles.module.scss";

interface ItemRequest {
  id: number;
  item: {
    name: string;
    code: string;
    message: string;
  };
  user: {
    id: number;
    companyCode: string;
    name: string;
    avatar: string;
  };
  requestedAtFormatted: string;
}

interface ItemRequestCardProps {
  itemRequest: ItemRequest;
}

export const ItemRequestCard = (props: ItemRequestCardProps): JSX.Element => {
  const { id, item, user, requestedAtFormatted } = props.itemRequest;

  return (
    <Link to={`${Paths.ITEMS_REQUESTS}/${id}`} className={styles.itemRequestCard}>
      <div className={styles.userContainer}>
        <Avatar size="small" userImage={user.avatar} userName={user.name} />
        <div className={styles.userInfo}>
          <strong>{user.name}</strong>
          <span>{user.companyCode}</span>
        </div>
        <span>{requestedAtFormatted}</span>
      </div>

      <p>{item.message}</p>

      <div className={styles.codeContainer}>
        <span>Código solicitado</span>
        <strong>{item.code}</strong>
      </div>
    </Link>
  );
};
