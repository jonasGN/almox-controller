import React, { useEffect } from "react";

type ElementRef = React.RefObject<HTMLElement>;

// TODO: fix bug that prevents to focus on elements between first and last elements
export const useTrapFocus = (elementRef: ElementRef) => {
  useEffect(() => {
    const keyListener = (e: KeyboardEvent) => {
      const isFocusKey = (e.shiftKey && e.key === "Tab") || e.key === "Tab";
      if (!isFocusKey) return;

      const focusableElements = elementRef.current?.querySelectorAll<HTMLElement>(
        "a[href], button:not([disabled]), textarea, input, select"
      );

      if (!focusableElements || focusableElements.length === 0) return;

      const firstFocusElement = focusableElements[0];
      const lastFocusElement = focusableElements[focusableElements.length - 1];

      if (isFocusKey && document.activeElement !== firstFocusElement) {
        firstFocusElement.focus();
        e.preventDefault();
        return;
      }

      if (isFocusKey && document.activeElement !== lastFocusElement) {
        lastFocusElement.focus();
        e.preventDefault();
      }
    };

    document.addEventListener("keydown", keyListener);

    return () => {
      document.removeEventListener("keydown", keyListener);
    };
  });
};
