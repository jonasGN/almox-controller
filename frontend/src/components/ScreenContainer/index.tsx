import { ReactChildrenElements } from "../../@types/elements";

import { classNames } from "../../utils/styles-helper";

import styles from "./styles.module.scss";

interface ScreenContainerProps {
  children: ReactChildrenElements;
  size?: "default" | "small";
  className?: string;
  useInlinePadding?: boolean;
}

export const ScreenContainer = (props: ScreenContainerProps): JSX.Element => {
  const { children, size, className, useInlinePadding } = props;

  const classes = classNames(styles.container, className!);

  return (
    <div className={classes} data-size={size} data-inline-padding={useInlinePadding}>
      {children}
    </div>
  );
};
