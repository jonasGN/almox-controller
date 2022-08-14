import { SignInForm } from "./SignInForm";
import { ScreenContainer } from "../../components/Layout";
import { Logo } from "../../components/Logo";

import styles from "./styles.module.scss";

export const SignInPage = (): JSX.Element => {
  return (
    <ScreenContainer size="small" className={styles.container} useInlinePadding>
      <Logo type="vertical" />
      <h1>Login</h1>

      <SignInForm />
    </ScreenContainer>
  );
};
