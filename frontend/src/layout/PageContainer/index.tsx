import { Outlet } from "react-router-dom";
import { classNames } from "../../utils/styles-helper";

import { Header } from "../../components/Header";
import { SideBar } from "../../components/SideBar";

import styles from "./styles.module.scss";

interface PageContainerProps {
  contentClassName?: string;
}

export const PageContainer = (props: PageContainerProps): JSX.Element => {
  const { contentClassName } = props;

  const contentClasses = classNames(styles.contentContainer, contentClassName!);

  return (
    <main className={styles.pageContainer}>
      <Header />
      <SideBar />

      <section className={contentClasses}>
        <Outlet />
      </section>
    </main>
  );
};
