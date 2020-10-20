import styled from "styled-components/native";
import { ITheme } from "../../../theme";

interface IWrapperProps {
  theme: ITheme;
}

interface IIconWrapperProps {
  theme: ITheme;
}

interface ITextProps {
  theme: ITheme;
}

export const Wrapper = styled.View<IWrapperProps>`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  padding: 24px;
  width: 100%;
  opacity: 0.8;
`;

export const IconWrapper = styled.View<IIconWrapperProps>`
  margin-right: 14px;
`;

export const Text = styled.Text<ITextProps>`
  font-size: 24px;
  font-weight: bold;
  text-transform: capitalize;
  color: ${({ theme }) => theme.colors.text};
`;
