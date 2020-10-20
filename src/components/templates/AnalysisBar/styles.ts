import styled from "styled-components/native";
import { ITheme } from "../../../theme";

interface IWrapperProps {
  theme: ITheme;
}

interface IScrollWrapperProps {
  theme: ITheme;
}

interface IActionsWrapperProps {
  theme: ITheme;
}

export const Wrapper = styled.View<IWrapperProps>`
  display: flex;
  flex-direction: column;
  width: 30%;
  height: 100%;
  background-color: ${({ theme }) => theme.colors.background};
`;

export const ScrollWrapper = styled.View<IScrollWrapperProps>`
  display: flex;
  flex-direction: row;
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
