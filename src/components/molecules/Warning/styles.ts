import styled from "styled-components/native";
import { ITheme } from "../../../theme";

interface IWrapperProps {
  theme: ITheme;
}

interface ITitleProps {
  theme: ITheme;
}

interface IDescriptionProps {
  theme: ITheme;
}

export const Wrapper = styled.View<IWrapperProps>`
  margin: 14px;
  padding: 14px;
  min-width: 80%;
  background-color: ${({ theme }) => theme.colors.background};
  border-radius: ${({ theme }) => `${theme.roundness}px`};
`;

export const Title = styled.Text<ITitleProps>`
  margin-bottom: 8px;
  font-size: 16px;
  font-weight: bold;
  text-transform: uppercase;
  color: ${({ theme }) => theme.colors.text};
  opacity: 0.5;
`;

export const Description = styled.Text<IDescriptionProps>`
  font-size: 18px;
  color: ${({ theme }) => theme.colors.text};
`;
