import { SignInForm } from "./SignInForm";
import { ScreenSizeLayout } from "../../layout";
import { Logo } from "../../components/Logo";

import styles from "./styles.module.scss";

export const SignInPage = (): JSX.Element => {
  return (
    <ScreenSizeLayout size="medium" className={styles.container}>
      <Logo type="vertical" />
      <h1>Login</h1>

      <SignInForm />
    </ScreenSizeLayout>
  );
};
