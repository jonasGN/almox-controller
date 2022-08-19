import { ReactChildrenElement } from "../../@types/elements";

import { classNames } from "../../utils/styles-helper";

import styles from "./styles.module.scss";

interface ScreenContainerProps {
  children: ReactChildrenElement;
  size?: "default" | "small";
  className?: string;
  useInlinePadding?: boolean;
}

export const ScreenContainer = (props: ScreenContainerProps): JSX.Element => {
  const { children, size, className, useInlinePadding = true } = props;

  const classes = classNames(styles.screenContainer, className!);

  return (
    <div className={classes} data-size={size} data-inline-padding={useInlinePadding}>
      {children}
    </div>
  );
};
