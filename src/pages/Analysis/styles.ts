import styled from "styled-components/native";
import { ITheme } from "../../theme";

interface IThemeProps {
  theme: ITheme;
}

export const Wrapper = styled.View<IThemeProps>`
  display: flex;
  flex-direction: row;
  flex: 1 1;

  width: 100%;
  height: 100%;
`;
