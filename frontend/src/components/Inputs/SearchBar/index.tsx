import React, { useState } from "react";

import { Icon } from "../../Icon";
import { Icons } from "../../Icons";
import { BaseInput } from "../BaseInput";
import { IconButton } from "../../Buttons";

import styles from "./styles.module.scss";

type ChangeEvent = React.ChangeEvent<HTMLInputElement>;
type KeyboardEvent = React.KeyboardEvent;
type SearchCallback = (searchTerm: string) => void;

interface SearchBarProps {
  onSearch: SearchCallback;
}

export const SearchBar = (props: SearchBarProps): JSX.Element => {
  const { onSearch } = props;

  const [searchTerm, setSearchTerm] = useState("");

  const changeSearchTerm = (e: ChangeEvent) => setSearchTerm(e.target.value);
  const clearSearch = () => setSearchTerm("");

  const handleSearch = (e: KeyboardEvent) => {
    if (e.key !== "Enter") return;
    onSearch(searchTerm);
  };

  const leadingIcon = <Icon icon={Icons.search} />;
  const trailingIcon = <IconButton icon={Icons.close} onClick={clearSearch} />;

  return (
    <BaseInput
      name="search-items"
      type="search"
      value={searchTerm}
      onChange={changeSearchTerm}
      leadingIcon={leadingIcon}
      trailingIcon={trailingIcon}
      onKeyDown={handleSearch}
    />
  );
};
