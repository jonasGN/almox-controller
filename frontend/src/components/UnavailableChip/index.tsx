import { ShowWhen } from "@/layout";
import { classNames } from "@/utils/styles";

import styles from "./styles.module.scss";

interface UnavailableChipProps {
  isUnavailable: boolean;
  type?: "default" | "huge";
}

export const UnavailableChip = (props: UnavailableChipProps): JSX.Element => {
  const { isUnavailable, type } = props;

  const containerClasses = classNames(
    styles.unvailableChipContainer,
    type === "huge" ? styles.huge : ""
  );

  return (
    <ShowWhen condition={isUnavailable}>
      <span className={containerClasses}>
        {isUnavailable ? "Indisponível" : "Disponível"}
      </span>
    </ShowWhen>
  );
};
