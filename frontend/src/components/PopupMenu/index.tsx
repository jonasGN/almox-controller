import { OptionLine, OptionLineProps } from "./OptionLine";

import styles from "./styles.module.scss";

export type PopupOptions = OptionLineProps;

interface PopupMenuProps {
  options: PopupOptions[];
  isVisible: boolean;
}

export function PopupMenu({ options, ...props }: PopupMenuProps) {
  if (!props.isVisible) return null;

  if (options.length === 0) throw Error("You must pass at least one option.");

  // render the warning options last
  const sorted = [...options].sort(
    (a, b) => Number(a.warning) - Number(b.warning)
  );

  return (
    <nav className={styles.popupMenu}>
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
