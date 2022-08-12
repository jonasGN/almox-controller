import { useState } from "react";

import { MainButton } from "../../../components/Buttons";
import { TextField } from "../../../components/Inputs";

export const SignInForm = (): JSX.Element => {
  const [companyCode, setCompanyCode] = useState("");
  const [password, setPassword] = useState("");

  const handleSignIn = (e: React.FormEvent) => {
    e.preventDefault();
  };

  return (
    <form onSubmit={handleSignIn}>
      <TextField
        label="Código interno"
        name="email"
        value={companyCode}
        onChange={(e) => setCompanyCode(e.target.value)}
      />
      <TextField
        label="Senha"
        name="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />

      <MainButton type="submit" title="entrar" />
    </form>
  );
};
