import { ReactChildrenElement } from "../../@types/elements";
import { classNames } from "../../utils/styles-helper";

import { Header } from "../../components/Header";
import { SideBar } from "../../components/SideBar";

import styles from "./styles.module.scss";

interface PageContainerProps {
  contentClassName?: string;
  children: ReactChildrenElement;
}

export const PageContainer = (props: PageContainerProps): JSX.Element => {
  const { contentClassName, children } = props;

  const contentClasses = classNames(styles.contentContainer, contentClassName!);

  return (
    <main className={styles.pageContainer}>
      <Header />
      <SideBar />

      <section className={contentClasses}>{children}</section>
    </main>
  );
};
