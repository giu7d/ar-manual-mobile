import styled from "styled-components/native";
import { ITheme } from "../../../theme";

interface IInputProps {
  theme: ITheme;
}

export const Input = styled.TextInput<IInputProps>`
  padding: 14px 24px;
  margin: 8px 0;
  min-width: 100%;
  font-weight: 600;
  font-size: 18px;
  border: 2px solid rgba(0, 0, 0, 0.1);
  color: ${({ theme }) => theme.colors.text};
  border-radius: ${({ theme }) => `${theme.roundness}px`};
`;
