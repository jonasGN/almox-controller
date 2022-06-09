import { ItemRequest } from "../../@types/entities";

import { UserHeaderTile } from "../UserHeaderTile";

import styles from "./styles.module.scss";

interface ItemRequestCardProps {
  item: ItemRequest;
  onClick?: React.MouseEventHandler<HTMLAnchorElement>;
  isFocused?: boolean;
}

export function ItemRequestCard(props: ItemRequestCardProps) {
  const { user, requestedItem: request } = props.item;
  const activeClass = props.isFocused ? styles.active : "";

  return (
    <a
      href="#/"
      className={`${styles.itemRequestCard} ${activeClass}`}
      onClick={props.onClick}
    >
      <UserHeaderTile
        id={user.id}
        name={user.name}
        companyId={user.companyCode}
        actionDate={request.moment}
      />
      <p>{request.message}</p>
      <div className={styles.codeContainer}>
        <span>Código solicitado</span>
        <strong>{request.itemCode}</strong>
      </div>
    </a>
  );
}
