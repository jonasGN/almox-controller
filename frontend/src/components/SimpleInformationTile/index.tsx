import { classNames } from "../../utils/styles-helper";

import styles from "./styles.module.scss";

interface SimpleInformationTileProps {
  title: string;
  info: string | number;
  className?: string;
}

export const SimpleInformationTile = (props: SimpleInformationTileProps): JSX.Element => {
  const { title, info, className } = props;

  const classes = classNames(styles.infoTileContainer, className!);

  return (
    <div className={classes}>
      <span>{title}</span>
      <strong>{info}</strong>
    </div>
  );
};
