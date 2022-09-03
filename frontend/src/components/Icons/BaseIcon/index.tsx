import styles from "./styles.module.scss";

export interface BaseIconProps extends React.SVGProps<SVGSVGElement> {
  size?: "default" | "small" | "big";
  styleType?: "default" | "primary" | "danger";
  children?: React.ReactElement;
}

export const BaseIcon = (props: BaseIconProps): JSX.Element => {
  const { size, styleType, children, ...rest } = props;

  const iconSize = (): number => {
    switch (size) {
      case "small":
        return 20;
      case "big":
        return 48;
      default:
        return 24;
    }
  };

  const classes = (): string => {
    switch (styleType) {
      case "primary":
        return styles.primary;
      case "danger":
        return styles.danger;
      default:
        return "";
    }
  };

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      height={iconSize()}
      width={iconSize()}
      className={classes()}
      {...rest}
    >
      {children}
    </svg>
  );
};
