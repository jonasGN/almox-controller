import { useState } from "react";
import { useNavigate } from "react-router-dom";

import { MainButton } from "../../../components/Buttons";
import { TextField } from "../../../components/Inputs";
import { Paths } from "../../../routes";

import styles from "./styles.module.scss";

export const SignInForm = (): JSX.Element => {
  const [companyCode, setCompanyCode] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const navigate = useNavigate();

  const handleSignIn = (e: React.FormEvent) => {
    setIsLoading(true);
    e.preventDefault();
    setTimeout(() => setIsLoading(false), 700);
    navigate(Paths.ITEMS);
  };

  return (
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

      <MainButton type="submit" title="entrar" isLoading={isLoading} />
    </form>
  );
};
