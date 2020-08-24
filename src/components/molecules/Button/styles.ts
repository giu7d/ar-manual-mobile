import styled from "styled-components/native";
import { ITheme } from "../../../theme";

interface IButtonWrapperProps {
  theme: ITheme;
}

interface IButtonTextProps {
  theme: ITheme;
}

export const ButtonWrapper = styled.TouchableOpacity<IButtonWrapperProps>`
  margin: 14px 0;
  min-width: 100%;
  padding: 14px 24px;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) => theme.colors.primary};
  border-radius: ${({ theme }) => `${theme.roundness}px`};
`;

export const ButtonText = styled.Text<IButtonTextProps>`
  font-size: 18px;
  font-weight: bold;
  text-transform: uppercase;
  color: ${({ theme }) => theme.colors.foreground};
`;
