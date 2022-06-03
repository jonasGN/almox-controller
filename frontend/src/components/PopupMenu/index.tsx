import { OptionLine, OptionLineProps } from "./OptionLine";

import styles from "./styles.module.scss";

interface PopupMenuProps {
  options: OptionLineProps[];
  isVisible: boolean;
}

export function PopupMenu({ options, ...props }: PopupMenuProps) {
  if (!props.isVisible) return null;

  const visibleClass = props.isVisible ? styles.visible : "";

  const sorted = options.sort((a, b) => Number(a.warning) - Number(b.warning));

  return (
    <nav className={`${styles.popupMenu} ${visibleClass}`}>
      <ul className={styles.optionsList}>
        {sorted.map((option) => (
          <OptionLine
            key={option.title}
            title={option.title}
            onClick={option.onClick}
            warning={option.warning}
          />
        ))}
      </ul>
    </nav>
  );
}
