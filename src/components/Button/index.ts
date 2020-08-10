import styled from "styled-components/native";
import { ITheme } from "../../theme";

interface IButtonProps {
  theme: ITheme;
}

interface IButtonTextProps {
  theme: ITheme;
}

export const Button = styled.TouchableOpacity<IButtonProps>`
  margin: 14px 0;
  padding: 14px 24px;
  width: 100%;
  height: 54px;
  align-items: center;
  justify-content: center;
  /* Theme */
  background-color: ${({ theme }) => theme.colors.primary};
  border-radius: ${({ theme }) => theme.roundness}px;
`;

export const ButtonText = styled.Text<IButtonTextProps>`
  font-size: 18px;
  font-weight: bold;
  text-transform: uppercase;
  color: ${({ theme }) => theme.colors.foreground};
`;
