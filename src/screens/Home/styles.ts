import styled from "styled-components/native";
import { ITheme } from "../../theme";

interface IThemeProps {
  theme: ITheme;
}

export const Wrapper = styled.ScrollView<IThemeProps>`
  display: flex;
  flex-direction: column;
  flex: 1 1;
  width: 100%;
  padding: 0 64px;
  margin: 0 64px;
`;

export const Header = styled.View<IThemeProps>`
  display: flex;
  flex-direction: row;
  margin: 24px 68px;
  width: 100%;
  height: auto;
  align-items: center;
`;

export const Title = styled.Text<IThemeProps>`
  margin: 0 14px;
  font-size: 32px;
  font-weight: bold;
  color: ${({ theme }) => theme.colors.text};
`;

export const Content = styled.View<IThemeProps>`
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: center;
`;
