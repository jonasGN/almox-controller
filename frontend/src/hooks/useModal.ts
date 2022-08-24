import { createRef, useState } from "react";

import { useOnPressKey } from "./useOnPressKey";
import { useOnClickOutside } from "./useOnClickOutside";
import { useTrapFocus } from "./useTrapFocus";

export function useModal() {
  const [isOpen, setIsOpen] = useState(false);

  const onCloseModal = (): void => setIsOpen(false);
  const onOpenModal = (): void => setIsOpen(true);

  const modalRef = createRef<HTMLDivElement>();
  useOnClickOutside(modalRef, onCloseModal);
  useOnPressKey(onCloseModal);
  // useTrapFocus(modalRef);

  return { isOpen, onCloseModal, onOpenModal, modalRef };
}
