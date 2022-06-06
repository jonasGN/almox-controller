import { RefObject, useEffect } from "react";

type Event = MouseEvent | TouchEvent;

export function useOnClickOutside<T extends HTMLElement>(
  ref: RefObject<HTMLElement>,
  handler: (event: Event) => void
) {
  useEffect(() => {
    const eventListener = (event: Event) => {
      const element = ref.current;
      if (!element || element.contains(event.target as Node) || null) return;

      handler(event);
    };

    document.addEventListener("mousedown", eventListener);
    document.addEventListener("touchstart", eventListener);

    return () => {
      document.removeEventListener("mousedown", eventListener);
      document.removeEventListener("touchstart", eventListener);
    };
  });
}
