import { AnyStyledComponent } from "styled-components";
import styled from "styled-components/native";
import Constants from "expo-constants";

import { ITheme } from "./theme";

interface IGlobalStyleProps {
  theme: ITheme;
}

export const GlobalStyle = styled.View<IGlobalStyleProps>`
  padding-top: ${`${Constants.statusBarHeight}px`};
  width: 100%;
  height: 100%;

  align-items: center;
  justify-content: center;
  /* Theme */
  font-size: ${({ theme }) => `${theme.font.size}px`};
  color: ${({ theme }) => theme.colors.text};
  background-color: ${({ theme }) => theme.colors.background};
`;
