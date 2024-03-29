import styles from "./styles.module.scss";

interface SideBarSection {
  title: string;
  children: React.ReactNode;
}

export const SideBarSection = (props: SideBarSection): JSX.Element => {
  const { title, children } = props;

  const sectionTitle = title.toUpperCase();

  return (
    <div className={styles.sideBarSectionContainer}>
      <strong>{sectionTitle}</strong>

      <ul>{children}</ul>
    </div>
  );
};
