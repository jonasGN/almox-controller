import { Outlet } from "react-router-dom";
import { classNames } from "@/utils/styles";

import { ScreenSizeLayout } from "../ScreenSizeLayout";
import { Header } from "@/components/Header";
import { SideBar } from "@/components/SideBar";

import styles from "./styles.module.scss";

interface AppLayoutProps {
  contentClassName?: string;
}

export const AppLayout = (props: AppLayoutProps): JSX.Element => {
  const { contentClassName } = props;

  const contentClasses = classNames(styles.contentContainer, contentClassName!);

  return (
    <ScreenSizeLayout className={styles.mainContainer}>
      <Header />
      <SideBar />

      <section className={contentClasses}>
        <Outlet />
      </section>
    </ScreenSizeLayout>
  );
};
