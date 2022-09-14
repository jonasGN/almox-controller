import { useEffect } from "react";

type Handler = (event: KeyboardEvent) => void;

interface Config {
  keyboardKey?: string;
  isMounted: boolean;
}

export const useOnPressKey = (handler: Handler, config: Config) => {
  const { isMounted, keyboardKey = "Escape" } = config;

  useEffect(() => {
    const keyListener = (e: KeyboardEvent) => {
      if (e.key === keyboardKey) handler(e);
    };

    if (isMounted) {
      document.addEventListener("keydown", keyListener);
    }

    return () => {
      document.removeEventListener("keydown", keyListener);
    };
  }, [isMounted]);
};
