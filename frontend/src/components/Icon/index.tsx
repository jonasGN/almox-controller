import { Icons } from "../Icons";

import styles from "./styles.module.scss";

interface IconProps {
  icon: Icons;
  alt?: string;
  size?: "icon";
}

export const Icon = (props: IconProps): JSX.Element => {
  const { icon, alt, size } = props;

  return (
    <>
      <img
        src={icon}
        alt={alt}
        className={styles.iconContainer}
        data-size={size ?? "icon"}
      />
    </>
  );
};
