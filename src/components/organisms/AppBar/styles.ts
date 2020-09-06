import styled from "styled-components/native";
import { ITheme } from "../../../theme";

interface IAppBarWrapperProps {
  theme: ITheme;
}

interface IActionsWrapperProps {
  theme: ITheme;
}

export const AppBarWrapper = styled.View<IAppBarWrapperProps>`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 14px 24px;
  width: 100%;
  height: auto;
`;

export const ActionsWrapper = styled.View<IActionsWrapperProps>`
  align-self: center;
  align-items: center;
  justify-content: flex-end;
  flex-direction: row;
  width: 15%;
`;
