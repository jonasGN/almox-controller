import styles from "./styles.module.scss";

interface LogoProps {
  type?: "horizontal" | "vertical";
}

const horizontal = "/images/logo-horizontal.svg";
const vertical = "/images/logo-vertical.svg";

export const Logo = (props: LogoProps): JSX.Element => {
  const { type = "horizontal" } = props;

  return (
    <span className={styles.logoContainer}>
      <img
        src={type === "horizontal" ? horizontal : vertical}
        alt="Almox Controller logo"
      />
    </span>
  );
};
