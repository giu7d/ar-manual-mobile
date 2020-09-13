import styled from "styled-components/native";
import { ITheme } from "../../theme";

interface IThemeProps {
  theme: ITheme;
}

interface IActionsWrapperProps {
  theme: ITheme;
}

export const Wrapper = styled.View<IThemeProps>`
  display: flex;
  flex-direction: row;
  flex: 1 1;

  width: 100%;
  height: 100%;
`;

export const ActionsWrapper = styled.View<IActionsWrapperProps>`
  display: flex;
  width: 100%;
  padding: 14px;
  margin-top: 14px;
  margin-bottom: 100px;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;
