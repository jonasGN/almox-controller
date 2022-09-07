import { classNames } from "../../utils/styles";

import styles from "./styles.module.scss";

interface ScreenSizeLayoutProps {
  children: React.ReactNode;
  size?: "default" | "medium";
  className?: string;
}

export const ScreenSizeLayout = (props: ScreenSizeLayoutProps): JSX.Element => {
  const { children, size, className } = props;

  const sizeClassName = size === "medium" ? styles.medium : "";
  const classes = classNames(styles.screen, sizeClassName, className!);

  return <main className={classes}>{children}</main>;
};
