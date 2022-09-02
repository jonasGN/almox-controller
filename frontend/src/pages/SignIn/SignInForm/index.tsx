import { useState } from "react";
import { useNavigate } from "react-router-dom";

import { MainButton } from "../../../components/Buttons";
import { WarningIcon } from "../../../components/Icons";
import { TextField } from "../../../components/Inputs";
import { AlertDialog } from "../../../components/Modals";
import { useModal } from "../../../hooks";
import { signin } from "../../../repositories/auth";
import { Paths } from "../../../routes";

import styles from "./styles.module.scss";

export const SignInForm = (): JSX.Element => {
  const [companyCode, setCompanyCode] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const navigate = useNavigate();
  const { modalRef, isOpen, onCloseModal, onOpenModal } = useModal();

  const handleSignIn = async (e: React.FormEvent) => {
    setIsLoading(true);
    e.preventDefault();

    try {
      const response = await signin(companyCode, password);
      console.log("AUTH DATA:", response);
      navigate(Paths.ITEMS);
    } catch {
      onOpenModal();
    } finally {
      setCompanyCode("");
      setPassword("");
      setIsLoading(false);
    }
  };

  return (
    <>
      <form onSubmit={handleSignIn} className={styles.signInFormContainer}>
        <TextField
          label="Código interno"
          name="email"
          value={companyCode}
          onChange={(e) => setCompanyCode(e.target.value)}
        />
        <TextField
          label="Senha"
          name="password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <a href="/forgot" className={styles.forgotPassword}>
          Esqueci minha senha
        </a>

        <MainButton
          type="submit"
          title="entrar"
          isLoading={isLoading}
          isDisabled={!companyCode || !password}
        />
      </form>

      <AlertDialog
        modalRef={modalRef}
        isOpen={isOpen}
        icon={<WarningIcon />}
        title="Credenciais incorretas"
        description="E-mail ou senha incorretos. Por favor, confira suas credenciais e tente novamente"
        onCloseModal={onCloseModal}
        useSingleButton={true}
      />
    </>
  );
};
