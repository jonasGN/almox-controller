import { createRef, useState } from "react";
import { useOnClickOutside } from "./useOnClickOutside";

export function useModal() {
  const [isOpen, setIsOpen] = useState(false);

  const onCloseModal = (): void => setIsOpen(false);
  const onOpenModal = (): void => setIsOpen(true);

  const modalRef = createRef<HTMLDivElement>();
  useOnClickOutside(modalRef, onCloseModal);

  return { isOpen, onCloseModal, onOpenModal, modalRef };
}
