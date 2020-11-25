import styled from "styled-components/native";
import Constants from "expo-constants";

export const GlobalStyle = styled.View`
  padding-top: ${`${Constants.statusBarHeight}px`};
  width: 100%;
  height: 100%;
  align-items: center;
  justify-content: center;
  font-size: ${({ theme }) => `${theme.font.size}px`};
  color: ${({ theme }) => theme.colors.text};
  background-color: ${({ theme }) => theme.colors.background};
`;
