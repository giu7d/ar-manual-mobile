import React from "react";

import { Input } from "../../atoms/Input";
import { SearchWrapper, SearchIcon } from "./styles";

interface ISearchInputProps {}

export const SearchInput: React.FC<ISearchInputProps> = (props) => {
  return (
    <SearchWrapper>
      <SearchIcon name="search" size={24} />
      <Input style={{ minWidth: "50%" }} placeholder="Digite para buscar..." />
    </SearchWrapper>
  );
};
