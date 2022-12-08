import { useState } from "react";
import { useAuth } from "@/hooks/auth";
import { useOverlayElement } from "@/hooks/element";
import { useNavigation } from "@/hooks/common";
import { signIn } from "@/repositories/auth";
import { Paths } from "@/routes";
import { persistData } from "@/services/localStorage";
import { Link } from "@/wrappers/navigation";

import { MainButton, SecondaryButton } from "@/components/Buttons";
import { HideTextField, TextField } from "@/components/Inputs";
import { Dialog } from "@/components/Modals";
import { SplitButtonContainer } from "@/layout";

import styles from "./styles.module.scss";

interface SigninCredentials {
  email: string;
  password: string;
}

export const SignInForm = (): JSX.Element => {
  const { setUser } = useAuth();
  const { navigateTo } = useNavigation();

  const [credentials, setCredentials] = useState({
    email: "",
    password: "",
  } as SigninCredentials);

  const [errMessage, setErrMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const { isVisible, elementRef, onOpenElement, onCloseElement } = useOverlayElement();

  const setEmail = (email: string) => {
    setCredentials({ ...credentials, email });
  };

  const setPassword = (password: string) => {
    setCredentials({ ...credentials, password });
  };

  const handleSignIn = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const response = await signIn({
        internalCode: credentials.email,
        password: credentials.password,
      });
      const user = response.user;

      setUser({
        ...user,
        accessToken: response.accessToken,
        roles: response.roles,
      });

      persistData("user", user);
      navigateTo(Paths.ITEMS, { useFrom: true, replace: true });
    } catch (e) {
      setErrMessage(
        (e as Error).message + " Verifique os dados informados e tente novamente. "
      );
      onOpenElement();
    } finally {
      setIsLoading(false);
      setCredentials({ email: "", password: "" });
    }
  };

  return (
    <>
      <form onSubmit={handleSignIn} className={styles.signInFormContainer}>
        <TextField
          autoFocus
          name="internalCode"
          label="E-mail"
          value={credentials.email}
          onChange={(e) => setEmail(e.target.value)}
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
          isDisabled={!credentials.email || !credentials.password}
        />
      </form>

      <Dialog
        ref={elementRef}
        isOpen={isVisible}
        onCloseModal={onCloseElement}
        icon="warning"
        title="Credenciais incorretas"
        description={errMessage}
      >
        <SplitButtonContainer>
          <SecondaryButton title="ok" onClick={onCloseElement} />
        </SplitButtonContainer>
      </Dialog>
    </>
  );
};
