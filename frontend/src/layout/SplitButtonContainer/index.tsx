import React from "react";
import { ElementException } from "@/exceptions";
import { classNames } from "@/utils/styles";

import styles from "./styles.module.scss";

interface SplitButtonContainerProps {
  className?: string;
  children: React.ReactNode;
}

export const SplitButtonContainer = (props: SplitButtonContainerProps): JSX.Element => {
  const { className, children } = props;
  const buttonsCount = React.Children.count(children);

  if (buttonsCount === 0 || buttonsCount > 2) {
    throw new ElementException("Must have at least one SplitButton element and max two.");
  }

  const classes = classNames(styles.splitButton, className!);

  return <div className={classes}>{children}</div>;
};

SplitButtonContainer.componentName = "SplitButtonContainer";
