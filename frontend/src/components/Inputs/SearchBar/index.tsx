import React, { forwardRef, ForwardRefRenderFunction, useState } from "react";

import { SearchIcon, CloseIcon } from "../../Icons";
import { BaseInput } from "../BaseInput";
import { IconButton } from "../../Buttons";

type ChangeEvent = React.ChangeEvent<HTMLInputElement>;
type KeyboardEvent = React.KeyboardEvent;
type SearchCallback = (searchTerm: string) => void;

interface SearchBarProps {
  name: string;
  onSearch: SearchCallback;
}

type ForwardRefFunction = ForwardRefRenderFunction<HTMLInputElement, SearchBarProps>;

const SearchBarBase: ForwardRefFunction = (props, ref): JSX.Element => {
  const { name, onSearch } = props;

  const [searchTerm, setSearchTerm] = useState("");

  const onChangeSearchTerm = (e: ChangeEvent) => setSearchTerm(e.target.value);
  const clearSearch = () => setSearchTerm("");

  const handleSearch = (e: KeyboardEvent) => {
    if (e.key !== "Enter") return;
    onSearch(searchTerm);
  };

  const leadingIcon = <SearchIcon styleType="primary" />;
  const trailingIcon = <IconButton icon={<CloseIcon />} onClick={clearSearch} />;

  return (
    <BaseInput
      name={name}
      leadingElement={leadingIcon}
      trailingElement={searchTerm ? trailingIcon : undefined}
    >
      <input
        ref={ref}
        id={name}
        name={name}
        type="search"
        value={searchTerm}
        onChange={onChangeSearchTerm}
        onKeyDown={handleSearch}
      />
    </BaseInput>
  );
};

export const SearchBar = forwardRef(SearchBarBase);
