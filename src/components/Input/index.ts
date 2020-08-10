import styled from "styled-components/native";
import { ITheme } from "../../theme";

interface IInputAreaProps {
  theme: ITheme;
}

interface ILabelProps {
  theme: ITheme;
}

interface IRequiredProps {
  theme: ITheme;
}

interface IInputProps {
  theme: ITheme;
}

export const InputArea = styled.View<IInputAreaProps>`
  margin: 14px 0;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
`;

export const Label = styled.Text<ILabelProps>`
  display: flex;
  margin: 8px 0;
  /* Font */
  font-size: 18px;
  color: ${({ theme }) => theme.colors.text};
`;

export const Required = styled.Text<IRequiredProps>`
  font-size: 18px;
  color: ${({ theme }) => theme.colors.danger};
`;

export const Input = styled.TextInput<IInputProps>`
  margin: 8px 0;
  padding: 14px 24px;
  height: 54px;
  min-width: 100%;
  /* Font */
  font-weight: 600;
  font-size: 18px;
  color: ${({ theme }) => theme.colors.text};
  /* Border */
  border: 2px solid rgba(0, 0, 0, 0.05);
  border-radius: ${({ theme }) => theme.roundness}px;
`;
