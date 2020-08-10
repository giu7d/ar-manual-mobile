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
  margin: 0 64px;
`;

export const Header = styled.View<IThemeProps>`
  display: flex;
  flex-direction: row;
  margin: 24px 0;
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

export const Col = styled.View<IThemeProps>`
  flex: 45%;
  max-width: 45%;
  padding: 0 4px;
`;

/* Card */
export const Card = styled.View<IThemeProps>`
  margin: 14px;
  display: flex;
  flex: 50%
  flex-direction: column;
  background-color: ${({ theme }) => theme.colors.foreground};
  border-radius: ${({ theme }) => `${theme.roundness}px`};
  overflow: hidden;
`;

export const CardContent = styled.View<IThemeProps>`
  display: flex;
  flex-direction: row;
  width: 100%;
  height: auto;
`;

export const CardImage = styled.View<IThemeProps>`
  width: 160px;
  height: 200px;
  background-color: ${({ theme }) => theme.colors.warn};
  opacity: 0.5;
  overflow: hidden;
`;

export const CardContentGroup = styled.View<IThemeProps>`
  padding: 14px;
  width: 100%;
`;

export const CardContentText = styled.View<IThemeProps>`
  margin: 14px 0;
`;

export const CardContentTitle = styled.Text<IThemeProps>`
  margin: 0 8px;
  font-size: 18px;
  text-transform: uppercase;
  color: ${({ theme }) => theme.colors.text};
  opacity: 0.75;
`;

export const CardContentValue = styled.Text<IThemeProps>`
  margin: 4px 8px;
  font-size: 18px;
  font-weight: bold;
  text-transform: uppercase;
  color: ${({ theme }) => theme.colors.text};
`;

export const CardAction = styled.View<IThemeProps>`
  display: flex;
  flex-direction: row;
  flex: 1;
  padding: 8px 14px;
  height: auto;
  background-color: #e5e5e5;
  align-items: center;
  justify-content: center;
`;
