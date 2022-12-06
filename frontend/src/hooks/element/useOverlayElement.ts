import React, { createRef, useState } from "react";

import { useOnPressKey } from "./useOnPressKey";
import { useOnClickOutside } from "./useOnClickOutside";
import { useTrapFocus } from "./useTrapFocus";

type VoidCallback = () => void;

interface UseOverlayElementData<T extends HTMLElement> {
  isVisible: boolean;
  onOpenElement: VoidCallback;
  onCloseElement: VoidCallback;
  elementRef: React.RefObject<T>;
}

export const useOverlayElement = <
  T extends HTMLElement = HTMLDivElement
>(): UseOverlayElementData<T> => {
  const [isVisible, setIsVisible] = useState(false);

  const onOpenElement = (): void => setIsVisible(true);
  const onCloseElement = (): void => setIsVisible(false);

  const elementRef = createRef<T>();

  useOnClickOutside(onCloseElement, {
    ref: elementRef,
    isMounted: isVisible,
  });

  useOnPressKey(onCloseElement, { isMounted: isVisible });
  useTrapFocus(elementRef);

  return { isVisible, onOpenElement, onCloseElement, elementRef };
};
