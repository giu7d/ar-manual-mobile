import styled from "styled-components/native";
import { ITheme } from "../../theme";

interface IThemeProps {
  theme: ITheme;
}

interface IWrapperProps {
  theme: ITheme;
  selected: boolean;
}

export const Wrapper = styled.View<IWrapperProps>`
  display: flex;
  flex-direction: column;
  margin: 14px 0;
  width: 372px;
  height: auto;
  overflow: hidden;
  /* Theme */
  background-color: ${({ theme }) => theme.colors.foreground};
  border-radius: ${({ theme }) => `${theme.roundness}px`};
  opacity: ${({ selected }) => (selected ? 1 : 0.75)};
`;

export const Content = styled.View<IThemeProps>`
  margin: 14px;
  padding: 14px;
`;

export const WarnContent = styled.View<IThemeProps>`
  margin: 14px;
  padding: 14px;
  background-color: ${({ theme }) => theme.colors.background};
  border-radius: ${({ theme }) => `${theme.roundness}px`};
`;

export const Title = styled.Text<IThemeProps>`
  margin-bottom: 8px;
  font-size: 16px;
  font-weight: bold;
  text-transform: uppercase;
  color: ${({ theme }) => theme.colors.text};
  opacity: 0.5;
`;

export const Value = styled.Text<IThemeProps>`
  font-size: 18px;
  color: ${({ theme }) => theme.colors.text};
`;

export const Actions = styled.View<IThemeProps>`
  flex-direction: row;
  padding: 0 14px;
  height: auto;
  background-color: #e5e5e5;
  align-items: center;
  justify-content: space-between;
`;
