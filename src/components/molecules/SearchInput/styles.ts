import styled from "styled-components/native";
import { Feather as Icon } from "@expo/vector-icons";
import { ITheme } from "../../../theme";

interface ISearchWrapperProps {
  theme: ITheme;
}

export const SearchWrapper = styled.View<ISearchWrapperProps>`
  align-self: center;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  padding: 0px 0px 0px 24px;
  border-radius: 14px;
  background-color: ${({ theme }) => theme.colors.foreground};
`;

export const SearchIcon = styled(Icon)`
  margin-right: 14px;
`;
