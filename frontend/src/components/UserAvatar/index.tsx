import { getNameInitials } from "../../utils/formatters";

import styles from "./styles.module.scss";

interface UserAvatarProps {
  avatar?: string;
  userName?: string;
  size?: "medium" | "default" | "button";
}

export function UserAvatar(props: UserAvatarProps) {
  if (!props.avatar && !props.userName) {
    throw Error(`Must be provided at least one: 'avatar' or 'userName'`);
  }

  const sizeClass = styles[props.size ?? "default"];

  // TODO: render image when user have one
  return (
    <div className={`${styles.userAvatar} ${sizeClass}`}>
      <span>{getNameInitials(props.userName ?? "")}</span>
    </div>
  );
}
