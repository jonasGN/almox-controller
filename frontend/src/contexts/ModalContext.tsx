import { createContext, createRef, useContext, useEffect, useState } from "react";
import { ReactChildrenElement } from "../@types/elements";

type VoidCallback = () => void;

interface ModalProviderProps {
  children: ReactChildrenElement;
}

interface ModalContextData {
  isOpen: boolean;
  modalRef: React.RefObject<HTMLDivElement>;
  onCloseModal: VoidCallback;
  onOpenModal: VoidCallback;
}

const ModalContext = createContext<ModalContextData>({} as ModalContextData);

export function ModalProvider(data: ModalProviderProps) {
  const { children } = data;

  const modalRef = createRef<HTMLDivElement>();

  const [isOpen, setIsOpen] = useState(false);

  const onCloseModal = (): void => setIsOpen(false);

  useEffect(() => {
    const listener = (e: Event): void => {
      const element = modalRef.current;
      if (element && element.contains(e.target as Node)) return;
      onCloseModal();
    };

    document.addEventListener("mousedown", listener);
    document.addEventListener("touchstart", listener);

    return () => {
      document.removeEventListener("mousedown", listener);
      document.removeEventListener("touchstart", listener);
    };
  });

  const onOpenModal = (): void => setIsOpen(true);

  return (
    <ModalContext.Provider value={{ isOpen, onCloseModal, onOpenModal, modalRef }}>
      {children}
    </ModalContext.Provider>
  );
}

export const useModal = () => useContext(ModalContext);
