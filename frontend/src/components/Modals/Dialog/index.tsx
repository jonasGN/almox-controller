import React from "react";
import type { ReactChildrenElement } from "@Types/elements";
import type { DefaultBaseModalProps } from "../DefaultModal";

import { ShowWhen } from "@/layout";
import { DefaultModal } from "../DefaultModal";

import styles from "./styles.module.scss";

interface ReactElementTypeObj {
  componentName?: string;
}

interface DialogProps extends DefaultBaseModalProps {
  children?: ReactChildrenElement;
}

type ForwardRefRender = React.ForwardRefRenderFunction<HTMLDivElement, DialogProps>;

const DialogBase: ForwardRefRender = (props, ref): JSX.Element | null => {
  const { icon, title, description, children, ...rest } = props;

  const elements = React.Children.toArray(children) as React.ReactElement[];

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

  return (
    <DefaultModal ref={ref} icon={icon} title={title} description={description} {...rest}>
      <ShowWhen condition={extraContent.length > 0}>
        <div className={styles.extraContent}>{extraContent}</div>
      </ShowWhen>

      {SplitButtonContainer}
    </DefaultModal>
  );
};

export const Dialog = React.forwardRef(DialogBase);
