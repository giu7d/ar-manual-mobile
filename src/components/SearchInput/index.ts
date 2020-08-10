import styled from "styled-components/native";
import { ITheme } from "../../theme";
import { Input } from "../../components/Input";

interface IThemeProps {
  theme: ITheme;
}

export const SearchArea = styled.View<IThemeProps>`
  align-self: center;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  width: 50%;
`;

export const SearchInput = styled(Input)`
  margin: 0 14px;
  min-width: 50%;
  width: 50%;
`;
