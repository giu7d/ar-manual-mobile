import styled from "styled-components/native";
import { ITheme } from "../../../theme";

interface ILabelProps {
  theme: ITheme;
}

interface ILabelRequiredProps {
  theme: ITheme;
}

export const Label = styled.Text<ILabelProps>`
  display: flex;
  margin: 8px 0;
  font-size: 18px;
  color: ${({ theme }) => theme.colors.text};
`;

export const LabelRequired = styled.Text<ILabelRequiredProps>`
  font-size: 18px;
  color: ${({ theme }) => theme.colors.danger};
`;
