import styled from "styled-components/native";
import { ITheme } from "../../theme";

interface IThemeProps {
  theme: ITheme;
}

export const AppBar = styled.View<IThemeProps>`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 24px;
  width: 100%;
  height: auto;
`;

export const ActionsArea = styled.View<IThemeProps>`
  align-self: center;
  align-items: center;
  justify-content: flex-end;
  flex-direction: row;
  width: 25%;
`;
