import { ReactChildrenElement } from "../../../@types/elements";
import { classNames } from "../../../utils/styles";

import { ShowWhen } from "../../../layout";

import styles from "./styles.module.scss";

interface InfoTileProps {
  title: string;
  info: string;
  highlightInfo?: boolean;
  children?: ReactChildrenElement;
}

export const InfoTile = (props: InfoTileProps): JSX.Element => {
  const { title, info, highlightInfo, children } = props;

  const classes = classNames(styles.infoTile, !!children ? styles.withContent : "");
  const infoClasses = classNames(styles.info, highlightInfo ? styles.highlight : "");

  return (
    <li className={classes}>
      <div className={infoClasses}>
        <span>{title}</span>
        <p>{info}</p>
      </div>

      <ShowWhen condition={!!children}>
        <div className={styles.content}>{children}</div>
      </ShowWhen>
    </li>
  );
};
