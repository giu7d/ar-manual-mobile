import styled from "styled-components/native";
import { ITheme } from "../../theme";

interface IThemeProps {
  theme: ITheme;
}

export const Wrapper = styled.View<IThemeProps>`
  display: flex;
  flex-direction: column;
  flex: 1 1;
  background-color: ${({ theme }) => theme.colors.text};
`;

export const Header = styled.View<IThemeProps>`
  position: absolute;
  display: flex;
  flex-direction: row;
  top: 0px;
  left: 0px;
  padding: 24px;
  width: 100%;
  justify-content: space-between;
`;

export const Actions = styled.View<IThemeProps>`
  display: flex;
  flex-direction: row;
  flex: 1 1;
  width: 100%;
  align-items: center;
  justify-content: flex-end;
`;
