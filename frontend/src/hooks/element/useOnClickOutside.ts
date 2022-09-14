import React, { useEffect } from "react";

type ElementRef = React.RefObject<HTMLElement>;
type Handler = (event: Event) => void;

interface Config {
  /**
   * The element to watch
   */
  ref: ElementRef;
  /**
   * Controlls when to add and remove the event listener
   */
  isMounted: boolean;
}

/**
 * Execute somthing when user clicks outside of an element. The element is given
 * by the `elementRef` param
 * @param handler execute when user click or touch outise of a given element
 */
export const useOnClickOutside = (handler: Handler, config: Config) => {
  const { ref, isMounted } = config;

  useEffect(() => {
    const listener = (e: Event) => {
      const element = ref.current;
      if (element && element.contains(e.target as Node)) return;
      handler(e);
    };

    if (isMounted) {
      document.addEventListener("mousedown", listener);
      document.addEventListener("touchstart", listener);
    }

    return () => {
      document.removeEventListener("mousedown", listener);
      document.removeEventListener("touchstart", listener);
    };
  }, [isMounted]);
};
