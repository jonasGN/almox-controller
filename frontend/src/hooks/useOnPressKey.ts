import { useEffect } from "react";

type Handler = (event: KeyboardEvent) => void;

export const useOnPressKey = (handler: Handler, key: string = "Escape") => {
  useEffect(() => {
    const keyListener = (e: KeyboardEvent) => {
      if (e.key === key) handler(e);
    };

    document.addEventListener("keydown", keyListener);

    return () => {
      removeEventListener("keydown", keyListener);
    };
  });
};
