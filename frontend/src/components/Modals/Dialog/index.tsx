import React from "react";
import type { DefaultBaseModalProps } from "../DefaultModal";

import { ShowWhen } from "@/layout";
import { DefaultModal } from "../DefaultModal";

import styles from "./styles.module.scss";

interface ReactElementTypeObj {
  componentName?: string;
}

interface DialogProps extends DefaultBaseModalProps {
  isFixed?: boolean;
  children?: React.ReactNode;
}

type ForwardRefRender = React.ForwardRefRenderFunction<HTMLDivElement, DialogProps>;

const DialogBase: ForwardRefRender = (props, ref): JSX.Element => {
  const { isFixed = false, children, ...rest } = props;

  // const ref = createRef<HTMLDivElement>();

  let elements = React.Children.toArray(children) as React.ReactElement[];

  // find the SplitButtonContainer element from children props
  const splitButtonContainerElement = elements.find((element) => {
    return (element.type as ReactElementTypeObj).componentName === "SplitButtonContainer";
  });

  // remove SplitButtonContainer element from children prop
  const extraContent = elements.filter((element) => {
    return (element.type as ReactElementTypeObj).componentName !== "SplitButtonContainer";
  });

  // returns a new React component with props
  const SplitButtonContainer = splitButtonContainerElement
    ? React.cloneElement(splitButtonContainerElement as React.ReactElement, {
        className: styles.actionContainer,
      })
    : null;

  // clean elements array because is not more necessary at this stage
  elements = [];

  return (
    <DefaultModal ref={ref} hasOnCloseButton={isFixed} {...rest}>
      <ShowWhen condition={extraContent.length > 0}>
        <div className={styles.extraContent}>{extraContent}</div>
      </ShowWhen>

      {SplitButtonContainer}
    </DefaultModal>
  );
};

export const Dialog = React.forwardRef(DialogBase);
