import styled from "styled-components/native";
import { ITheme } from "../../theme";

interface IThemeProps {
  theme: ITheme;
}

export const Wrapper = styled.View<IThemeProps>`
  display: flex;
  flex-direction: row;
  flex: 1 1;

  width: 100%;
  height: 100%;
`;

export const CanvasWrapper = styled.View<IThemeProps>`
  display: flex;
  flex-direction: column;
  flex: 1 1;
  background-color: ${({ theme }) => theme.colors.text};
`;

// AppBar
export const AppBarWrapper = styled.View<IThemeProps>`
  position: absolute;
  display: flex;
  flex-direction: row;
  top: 0px;
  left: 0px;
  padding: 24px;
  width: 100%;
  justify-content: space-between;
`;

// Infos
export const InformationWrapper = styled.View<IThemeProps>`
  position: absolute;
  display: flex;
  flex-direction: row;
  left: 0;
  bottom: 0;
  margin: 24px;
  padding: 24px;
  background-color: #000000;
  opacity: 0.5;
  border-radius: ${({ theme }) => `${theme.roundness}px`};
`;

export const InformationContent = styled.View<IThemeProps>`
  display: flex;
  flex-direction: column;
  margin-left: 14px;
  width: auto;
  height: auto;
  justify-content: flex-start;
  align-items: flex-start;
`;

export const InformationContentGroup = styled.View<IThemeProps>`
  margin-bottom: 14px;
`;

export const InformationContentTitle = styled.Text<IThemeProps>`
  margin: 0 8px;
  font-size: 18px;
  text-transform: uppercase;
  color: ${({ theme }) => theme.colors.foreground};
  opacity: 0.75;
`;

export const InformationContentValue = styled.Text<IThemeProps>`
  margin: 4px 8px;
  font-size: 18px;
  font-weight: bold;
  text-transform: uppercase;
  color: ${({ theme }) => theme.colors.foreground};
`;

// instruction
export const InstructionWrapper = styled.View<IThemeProps>`
  display: flex;
  flex-direction: column;
  background-color: ${({ theme }) => theme.colors.foreground};
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
