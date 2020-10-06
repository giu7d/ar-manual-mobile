import React from "react";

import { Input } from "../../atoms/Input";
import { SearchWrapper, SearchIcon } from "./styles";
import { useTheme } from "styled-components";
import { ITheme } from "../../../theme";

interface ISearchInputProps {}

export const SearchInput: React.FC<ISearchInputProps> = (props) => {
  const theme = useTheme() as ITheme;

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
