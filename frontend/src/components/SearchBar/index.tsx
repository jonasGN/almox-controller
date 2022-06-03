import { AppIcon } from "../AppIcon";

import searchIcon from "/icons/search.svg";
import styles from "./styles.module.scss";

export function SearchBar() {
  return (
    <div className={styles.searchContainer}>
      <div className={styles.searchBar}>
        <AppIcon icon={searchIcon} />
        <input type="search" placeholder="Comece a pesquisar" />
      </div>
    </div>
  );
}
