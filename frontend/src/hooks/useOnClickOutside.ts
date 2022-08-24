import React, { useEffect } from "react";

type ElementRef = React.RefObject<HTMLElement>;
type Handler = (event: Event) => void;

/**
 * Execute somthing when user clicks outside of an element. The element is given
 * by the `elementRef` param
 * @param elementRef the element to watch
 * @param handler execute when user click or touch outise of a given element
 */
export const useOnClickOutside = (elementRef: ElementRef, handler: Handler) => {
  useEffect(() => {
    const listener = (e: Event) => {
      const element = elementRef.current;

      if (element && element.contains(e.target as Node)) return;
      handler(e);
    };

    document.addEventListener("mousedown", listener);
    document.addEventListener("touchstart", listener);

    return () => {
      document.removeEventListener("mousedown", listener);
      document.removeEventListener("touchstart", listener);
    };
  });
};
