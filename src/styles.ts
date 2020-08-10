import styled from "styled-components/native";
import Constants from "expo-constants";

import { ITheme } from "./theme";

interface IGlobalStyle {
  theme: ITheme;
}

const GlobalStyle = styled.View<IGlobalStyle>`
  padding-top: ${Constants.statusBarHeight}px;
  flex: 1 1;
  width: 100%;
  align-items: center;
  justify-content: center;
  font-size: ${({ theme }) => `${theme.font.size}px`};
  color: ${({ theme }) => theme.colors.text};
  background-color: ${({ theme }) => theme.colors.background};
`;

export { GlobalStyle, IGlobalStyle };
