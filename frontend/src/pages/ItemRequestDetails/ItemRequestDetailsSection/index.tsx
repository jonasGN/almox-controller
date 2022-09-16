import { ReactChildrenElement } from "@Types/elements";
import { classNames } from "@/utils/styles";

import styles from "./styles.module.scss";

interface ItemRequestDetailsSectionProps {
  title: string;
  className?: string;
  children?: ReactChildrenElement;
}

export const ItemRequestDetailsSection = (
  props: ItemRequestDetailsSectionProps
): JSX.Element => {
  const { title, className, children } = props;

  const classes = classNames(styles.sectionContainer, className!);

  return (
    <section className={classes}>
      <h2>{title}</h2>
      {children}
    </section>
  );
};
