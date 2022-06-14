import { ItemRequest } from "../../@types/entities";
import { UserHeaderTile } from "../UserHeaderTile";

import styles from "./styles.module.scss";

interface ItemRequestCardProps {
  item: ItemRequest;
  onClick?: React.MouseEventHandler<HTMLAnchorElement>;
  isFocused?: boolean;
}

export function ItemRequestCard(props: ItemRequestCardProps) {
  const { user, requestedItem: item } = props.item;

  return (
    <a className={styles.itemRequestCard} onClick={props.onClick}>
      <UserHeaderTile
        id={user.id}
        name={user.name}
        companyId={user.companyCode}
        actionDate={item.moment}
      />
      <p>{item.message}</p>
      <div className={styles.codeContainer}>
        <span>Código solicitado</span>
        <strong>{item.code}</strong>
      </div>
    </a>
  );
}
