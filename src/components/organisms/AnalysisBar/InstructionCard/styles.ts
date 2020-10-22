import styled from "styled-components/native";
import { rgba } from "polished";
import { ITheme } from "../../../../theme";

interface IWrapperProps {
  theme: ITheme;
}

interface IContentWrapperProps {
  theme: ITheme;
}

interface ITitleProps {
  theme: ITheme;
}

interface IDescriptionProps {
  theme: ITheme;
  isHidden?: boolean;
}

interface IActionsWrapperProps {
  theme: ITheme;
}

export const Wrapper = styled.TouchableOpacity<IWrapperProps>`
  display: flex;
  flex-direction: column;
  margin: 24px;
  width: 90%;
  height: auto;
  overflow: hidden;
  background-color: ${({ theme }) => theme.colors.foreground};
  border-radius: ${({ theme }) => `${theme.roundness}px`};
`;

export const ContentWrapper = styled.View<IContentWrapperProps>`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin: 14px;
  padding: 14px;
`;

export const Title = styled.Text<ITitleProps>`
  margin-bottom: 8px;
  font-size: 16px;
  font-weight: bold;
  text-transform: uppercase;
  color: ${({ theme }) => theme.colors.text};
  opacity: 0.5;
`;

export const Description = styled.ScrollView<IDescriptionProps>`
  font-size: 18px;
  width: 100%;
  height: ${({ isHidden = false }) => (isHidden ? "80px" : "auto")};
  overflow: hidden;
  color: ${({ theme }) => theme.colors.text};
`;

export const ActionsWrapper = styled.View<IActionsWrapperProps>`
  flex-direction: row;
  padding: 0 14px;
  height: auto;
  background-color: ${({ theme }) => rgba(theme.colors.background, 0.5)};
  align-items: center;
  justify-content: space-between;
`;
