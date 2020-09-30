import styled from "styled-components/native";
import { rgba } from "polished";

import { ITheme } from "../../../theme";
import { IconButton } from "../../atoms/IconButton";

interface IWrapperProps {
  theme: ITheme;
}

interface IHeaderWrapperProps {
  theme: ITheme;
}

interface IActionsWrapperProps {
  theme: ITheme;
}

export const Wrapper = styled.View<IWrapperProps>`
  display: flex;
  flex-direction: column;
  flex: 1 1;
  width: 70%;
  height: 100%;
  align-self: flex-start;
  background-color: ${({ theme }) => theme.colors.text};
`;

export const HeaderWrapper = styled.View<IHeaderWrapperProps>`
  position: absolute;
  display: flex;
  flex-direction: row;
  top: 0px;
  left: 0px;
  padding: 24px;
  z-index: 99;
  width: 100%;
  justify-content: space-between;
`;

export const ActionsWrapper = styled.View<IActionsWrapperProps>`
  display: flex;
  flex-direction: row;
  flex: 1 1;
  width: 100%;
  align-items: center;
  justify-content: flex-end;
`;

export const ExtendedIconButton = styled(IconButton)`
  margin: 0 8px;
  background-color: ${({ theme }) => rgba(theme.colors.foreground, 0.4)};
  color: ${({ theme }) => theme.colors.text};
`;
