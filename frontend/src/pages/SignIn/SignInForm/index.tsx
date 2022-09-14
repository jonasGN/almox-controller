import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useAuth } from "../../../hooks/auth";
import { useOverlayElement } from "../../../hooks/element";
import { signIn } from "../../../repositories/auth";
import { Paths } from "../../../routes";
import { persistData } from "../../../services/localStorage";

import { MainButton } from "../../../components/Buttons";
import { WarningIcon } from "../../../components/Icons";
import { TextField } from "../../../components/Inputs";
import { AlertDialog } from "../../../components/Modals";

import styles from "./styles.module.scss";

export const SignInForm = (): JSX.Element => {
  const { setUser } = useAuth();

  const navigate = useNavigate();
  const location = useLocation();
  const from = ((location.state as any)?.from?.pathname as string) || Paths.DASHBOARD;

  const [internalCode, setInternalCode] = useState("");
  const [password, setPassword] = useState("");

  const [errMessage, setErrMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const { isVisible, elementRef, onOpenElement, onCloseElement } = useOverlayElement();

  const handleSignIn = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const response = await signIn({ internalCode, password });
      const user = response.user;

      setUser({
        ...user,
        accessToken: response.accessToken,
        roles: response.roles,
      });

      persistData("user", user);
      navigate(from, { replace: true });
    } catch (e) {
      setErrMessage((e as Error).message + " Por favor, tente novamente.");
      onOpenElement();
    } finally {
      setIsLoading(false);
      setInternalCode("");
      setPassword("");
    }
  };

  return (
    <>
      <form onSubmit={handleSignIn} className={styles.signInFormContainer}>
        <TextField
          autoFocus
          label="Código interno"
          name="email"
          value={internalCode}
          onChange={(e) => setInternalCode(e.target.value)}
          required
        />
        <TextField
          label="Senha"
          name="password"
          inputType="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />

        <a href="/forgot" className={styles.forgotPassword}>
          Esqueci minha senha
        </a>

        <MainButton
          type="submit"
          title="entrar"
          isLoading={isLoading}
          isDisabled={!internalCode || !password}
        />
      </form>

      <AlertDialog
        ref={elementRef}
        isOpen={isVisible}
        icon={<WarningIcon />}
        title="Erro durante login"
        description={errMessage}
        onCloseModal={onCloseElement}
        useSingleButton={true}
      />
    </>
  );
};
