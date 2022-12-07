import { Link } from "@/wrappers/navigation";
import { Paths } from "@/routes";

import { SignInForm } from "./SignInForm";
import { ScreenSizeLayout } from "@/layout";
import { Logo } from "@/components/Logo";

import styles from "./styles.module.scss";

export const SignInPage = (): JSX.Element => {
  return (
    <ScreenSizeLayout size="medium" className={styles.container}>
      <Logo type="vertical" />
      <h1>Entrar</h1>

      <SignInForm />

      <div className={styles.signup}>
        <p>
          Não possui conta? <Link to={Paths.SIGN_UP}>Criar nova</Link>
        </p>
      </div>
    </ScreenSizeLayout>
  );
};
