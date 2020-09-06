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
        shadowColor: "#000",
        shadowOffset: {
          width: 0,
          height: 0,
        },
        shadowOpacity: 0.22,
        shadowRadius: 1.22,

        elevation: 1,
      }}
    >
      <SearchIcon name="search" size={24} />
      <Input
        style={{
          minWidth: "50%",
          backgroundColor: theme.colors.foreground,
          borderColor: theme.colors.foreground,
        }}
        placeholder="Digite para buscar..."
      />
    </SearchWrapper>
  );
};
