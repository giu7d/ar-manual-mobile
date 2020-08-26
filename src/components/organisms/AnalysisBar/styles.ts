import styled from "styled-components/native";
import { ITheme } from "../../../theme";

interface IWrapperProps {
  theme: ITheme;
}

interface IScrollWrapperProps {
  theme: ITheme;
}

interface IHeaderWrapperProps {
  theme: ITheme;
}

interface IActionsWrapperProps {
  theme: ITheme;
}

interface ITitleWrapperProps {
  theme: ITheme;
}

interface ITitleProps {
  theme: ITheme;
}

export const Wrapper = styled.View<IWrapperProps>`
  display: flex;
  flex-direction: column;

  width: 30%;
  height: 100%;
  background-color: ${({ theme }) => theme.colors.background};
`;

export const HeaderWrapper = styled.View<IHeaderWrapperProps>`
  display: flex;
  flex-direction: column;

  padding: 24px 14px;
  width: 100%;
  height: auto;

  align-items: center;
  justify-content: space-between;
`;

export const TitleWrapper = styled.Text<ITitleWrapperProps>`
  display: flex;
  flex-direction: row;
  padding: 0 14px;
  width: 100%;
`;

export const Title = styled.Text<ITitleProps>`
  font-size: 24px;
  font-weight: 600;
  text-transform: uppercase;
  color: ${({ theme }) => theme.colors.text};
`;

export const ActionsWrapper = styled.View<IActionsWrapperProps>`
  display: flex;
  width: 100%;
  flex-direction: row;
  justify-content: flex-end;
`;

export const ScrollWrapper = styled.View<IScrollWrapperProps>`
  display: flex;
  flex-direction: row;
  width: 100%;
  height: 100%;
`;