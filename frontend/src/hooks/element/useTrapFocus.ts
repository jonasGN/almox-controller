import React, { useEffect } from "react";

type ElementRef = React.RefObject<HTMLElement>;

const focusableElements =
  '[href], button:not([disabled]), textarea, input, select, [tabindex]:not([tabindex="-1"])';

export const useTrapFocus = (elementRef: ElementRef) => {
  useEffect(() => {
    const element = elementRef.current;

    const focusableContent =
      element?.querySelectorAll<HTMLElement>(focusableElements) ?? [];
    const firstFocusableElement = focusableContent[0];
    const lastFocusableElement = focusableContent[focusableContent.length - 1];

    // handle focus on the current element
    const focusEventHandler = (e: KeyboardEvent) => {
      const isTabPressed = e.key === "Tab";
      if (!isTabPressed) return;

      // for shift key + tab combination
      if (e.shiftKey) {
        if (document.activeElement === firstFocusableElement) {
          lastFocusableElement?.focus();
          e.preventDefault();
        }
        return;
      }

      if (document.activeElement === lastFocusableElement) {
        firstFocusableElement?.focus();
        e.preventDefault();
      }
    };

    element?.addEventListener("keydown", focusEventHandler);
    return () => {
      element?.removeEventListener("keydown", focusEventHandler);
    };
  });
};
