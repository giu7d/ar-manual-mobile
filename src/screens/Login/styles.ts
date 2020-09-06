import styled from "styled-components/native";
import { ITheme } from "../../theme";

interface IThemeProps {
  theme: ITheme;
}

export const Wrapper = styled.View<IThemeProps>`
  display: flex;
  flex-direction: column;
  /* Size */
  padding: 24px;
  width: 450px;
  height: auto;
  margin: auto;
  align-items: center;
  /* Theme */
  background-color: ${({ theme }) => theme.colors.foreground};
  border-radius: ${({ theme }) => `${theme.roundness}px`};
`;

export const Title = styled.Text<IThemeProps>`
  margin: 24px 0;
  font-size: 32px;
  font-weight: bold;
  color: ${({ theme }) => theme.colors.text};
`;

export const Divider = styled.View<IThemeProps>`
  margin: 24px;
  width: 100%;
  height: 2px;
  background-color: ${({ theme }) => theme.colors.background};
`;

export const Paragraph = styled.Text<IThemeProps>`
  font-size: 18px;
  align-self: flex-start;
  color: ${({ theme }) => theme.colors.text};
  opacity: 0.8;
`;

export const HyperLink = styled.Text<IThemeProps>`
  font-size: 18px;
  font-weight: bold;
  color: ${({ theme }) => theme.colors.primary};
`;
