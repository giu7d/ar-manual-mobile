import styled from "styled-components/native";
import { ITheme } from "../../../theme";

interface IWrapperProps {
  theme: ITheme;
}

interface ITextProps {
  theme: ITheme;
}

export const Wrapper = styled.View<IWrapperProps>`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin: 0 24px;
`;

export const DoneText = styled.Text<ITextProps>`
  font-size: 24px;
  margin: 0 4px;
`;

export const TotalText = styled.Text<ITextProps>`
  font-size: 32px;
  font-weight: bold;
`;
