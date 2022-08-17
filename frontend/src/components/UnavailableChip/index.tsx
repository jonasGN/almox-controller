import { ShowWhen } from "../Layout";

import styles from "./styles.module.scss";

interface UnavailableChipProps {
  isUnavailable: boolean;
}

export const UnavailableChip = (props: UnavailableChipProps): JSX.Element => {
  const { isUnavailable } = props;

  return (
    <ShowWhen condition={isUnavailable}>
      <span className={styles.unvailableChipContainer}>
        {isUnavailable ? "Indisponível" : "Disponível"}
      </span>
    </ShowWhen>
  );
};
