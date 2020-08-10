import styled from "styled-components/native";
import { ITheme } from "../../theme";

/**
 * Card
 */
interface IWrapperProps {
  theme: ITheme;
}

export const Wrapper = styled.View<IWrapperProps>`
  display: flex;
  flex-direction: column;

  padding: 24px;

  width: 400px;

  background-color: ${({ theme }) => theme.colors.foreground};
  border-radius: ${({ theme }) => theme.roundness}px;
`;

/**
 * Input
 */
interface ILabelProps {
  theme: ITheme;
}

interface IRequiredProps {
  theme: ITheme;
}

interface IInputProps {
  theme: ITheme;
}

export const InputWrapper = styled.View<IWrapperProps>`
  margin: 14px 0;
`;

export const Label = styled.Text<ILabelProps>`
  height: 24px;
  align-content: center;
  justify-content: center;
  /* Font */
  font-size: 14px;
  color: #333333;
`;

export const Required = styled.Text<IRequiredProps>`
  font-size: 14px;
  color: ${({ theme }) => theme.colors.danger};
`;

export const Input = styled.TextInput<IInputProps>`
  padding: 14px 24px;
  width: 100%;
  height: 54px;
  /* Font */
  font-weight: 600;
  font-size: 14px;
  color: #333333;
  /* Border */
  border: 2px solid rgba(0, 0, 0, 0.05);
  border-radius: ${({ theme }) => theme.roundness}px;
`;

/**
 * Button
 */
// interface IButtonWrapperProps {
//   theme: ITheme;
// }

export const ButtonWrapper = styled.TouchableOpacity<IWrapperProps>`
  margin: 14px 0;
  padding: 14px 24px;
  width: 100%;
  height: 54px;
  align-items: center;
  justify-content: center;

  background-color: ${({ theme }) => theme.colors.primary};
  border-radius: ${({ theme }) => theme.roundness}px;
`;

export const ButtonText = styled.Text<IWrapperProps>`
  font-size: 18px;
  font-weight: bold;
  text-transform: uppercase;
  color: ${({ theme }) => theme.colors.foreground};
`;
