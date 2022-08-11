import { ReactNode } from "react";

type JSXComponent = JSX.Element | null;

interface ShowWhenProps {
  condition: boolean;
  children: ReactNode;
}

export const ShowWhen = ({ condition, children }: ShowWhenProps): JSXComponent => {
  return <>{condition && children}</>;
};
