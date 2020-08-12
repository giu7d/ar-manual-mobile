import styled from "styled-components/native";
import { ITheme } from "../../theme";

interface IThemeProps {
  theme: ITheme;
}

export const Wrapper = styled.View<IThemeProps>`
  display: flex;
  flex-direction: column;
  background-color: ${({ theme }) => theme.colors.background};
  width: 400px;
`;

export const Header = styled.View<IThemeProps>`
  display: flex;
  flex-direction: row;
  padding: 24px 14px;
  width: 100%;
  height: auto;
  align-items: center;
`;

export const Title = styled.Text<IThemeProps>`
  margin: 0 14px;
  font-size: 24px;
  text-transform: uppercase;
  color: ${({ theme }) => theme.colors.text};
`;

export const Actions = styled.View<IThemeProps>`
  display: flex;
  flex-direction: row;
  flex: 1 1;
  width: 100%;
  align-items: center;
  justify-content: flex-end;
`;

export const ScrollWrapper = styled.View<IThemeProps>`
  display: flex;
  flex-direction: row;
  padding: 0 14px;
  width: 100%;
  height: 100%;
`;
