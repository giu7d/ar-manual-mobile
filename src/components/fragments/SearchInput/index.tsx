import React from "react";
import { useTheme } from "styled-components";

import { SearchWrapper, SearchIcon } from "./styles";
import { Input } from "../Input";

interface ISearchInputProps {}

export const SearchInput: React.FC<ISearchInputProps> = (props) => {
  const theme = useTheme();

  return (
    <SearchWrapper
      style={{
        elevation: 2,
      }}
    >
      <SearchIcon name="search" size={24} />
      <Input
        style={{
          height: 54,
          minWidth: "50%",
          backgroundColor: theme.colors.foreground,
          borderColor: theme.colors.foreground,
        }}
        placeholder="Digite para buscar..."
      />
    </SearchWrapper>
  );
};
