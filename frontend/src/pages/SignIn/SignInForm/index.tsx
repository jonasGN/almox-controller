import { useState } from "react";
import { useAuth } from "@/hooks/auth";
import { useOverlayElement } from "@/hooks/element";
import { useNavigation } from "@/hooks/common";
import { signIn } from "@/repositories/auth";
import { Paths } from "@/routes";
import { persistData } from "@/services/localStorage";

import { MainButton } from "@/components/Buttons";
import { WarningIcon } from "@/components/Icons";
import { HideTextField, TextField } from "@/components/Inputs";
import { AlertDialog } from "@/components/Modals";

import styles from "./styles.module.scss";

export const SignInForm = (): JSX.Element => {
  const { setUser } = useAuth();
  const { navigateTo } = useNavigation();

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
      navigateTo(Paths.DASHBOARD, { useFrom: true, replace: true });
    } catch (e) {
      setErrMessage(
        (e as Error).message + " Verifique os dados informados e tente novamente. "
      );
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
          name="internalCode"
          label="Código interno"
          value={internalCode}
          onChange={(e) => setInternalCode(e.target.value)}
          required
        />
        <HideTextField
          name="password"
          label="Senha"
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

        <div className={styles.signup}>
          <p>
            Não possui conta? <a href="/signup">Criar nova</a>{" "}
          </p>
        </div>
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
