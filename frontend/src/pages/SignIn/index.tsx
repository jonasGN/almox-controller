import { SignInForm } from "./SignInForm";
import { ScreenContainer } from "../../components/ScreenContainer";

import styles from "./styles.module.scss";

export const SignInPage = (): JSX.Element => {
  return (
    <ScreenContainer size="small" className={styles.container} useInlinePadding>
      <h1>Login</h1>

      <SignInForm />
    </ScreenContainer>
  );
};
