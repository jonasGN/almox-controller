import { useState } from "react";
import { useAuth } from "@/hooks/auth";
import { useOverlayElement } from "@/hooks/element";
import { useNavigation } from "@/hooks/common";
import { signIn } from "@/repositories/auth";
import { Paths } from "@/routes";
import { persistData } from "@/services/localStorage";
import { Link } from "@/wrappers/navigation";

import { MainButton } from "@/components/Buttons";
import { WarningIcon } from "@/components/Icons";
import { HideTextField, TextField } from "@/components/Inputs";
import { AlertDialog } from "@/components/Modals";

import styles from "./styles.module.scss";

interface SigninCredentials {
  internalCode: string;
  password: string;
}

export const SignInForm = (): JSX.Element => {
  const { setUser } = useAuth();
  const { navigateTo } = useNavigation();

  const [credentials, setCredentials] = useState({
    internalCode: "",
    password: "",
  } as SigninCredentials);

  const [errMessage, setErrMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const { isVisible, elementRef, onOpenElement, onCloseElement } = useOverlayElement();

  const setInternalCode = (internalCode: string) => {
    setCredentials({ ...credentials, internalCode });
  };

  const setPassword = (password: string) => {
    setCredentials({ ...credentials, password });
  };

  const handleSignIn = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const response = await signIn({
        internalCode: credentials.internalCode,
        password: credentials.password,
      });
      const user = response.user;

      setUser({
        ...user,
        accessToken: response.accessToken,
        roles: response.roles,
      });

      persistData("user", user);
      navigateTo(Paths.DASHBOARD, { useFrom: true, replace: true });
    } catch (e) {
      setErrMessage(
        (e as Error).message + " Verifique os dados informados e tente novamente. "
      );
      onOpenElement();
    } finally {
      setIsLoading(false);
      setCredentials({ internalCode: "", password: "" });
    }
  };

  return (
    <>
      <form onSubmit={handleSignIn} className={styles.signInFormContainer}>
        <TextField
          autoFocus
          name="internalCode"
          label="Código interno"
          value={credentials.internalCode}
          onChange={(e) => setInternalCode(e.target.value)}
          required
        />
        <HideTextField
          name="password"
          label="Senha"
          value={credentials.password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />

        <Link to={Paths.FORGOT_PASSWORD} className={styles.forgotPassword}>
          Esqueci minha senha
        </Link>

        <MainButton
          type="submit"
          title="entrar"
          isLoading={isLoading}
          isDisabled={!credentials.internalCode || !credentials.password}
        />
      </form>

      <AlertDialog
        ref={elementRef}
        isOpen={isVisible}
        icon={<WarningIcon />}
        title="Credenciais incorretas"
        description={errMessage}
        onCloseModal={onCloseElement}
        useSingleButton={true}
        leftButtonStyle="confirm"
      />
    </>
  );
};
