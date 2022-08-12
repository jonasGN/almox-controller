import { SignInForm } from "./SignInForm";

import styles from "./styles.module.scss";

export const SignInPage = (): JSX.Element => {
  return (
    <div className={styles.container}>
      <h1>Login</h1>

      <SignInForm />
    </div>
  );
};
