import styled from "styled-components/native";
import { IconButton } from "../../atoms/IconButton";
import { ITheme } from "../../../theme";

interface IThemeProps {
  theme: ITheme;
}

export const Image = styled.Image<IThemeProps>`
  width: 150px;
  height: 150px;
  border-radius: 8px;
`;

export const CloseButton = styled(IconButton)<IThemeProps>`
  left: -24px;
  top: -24px;
  background-color: ${({ theme }) => theme.colors.foreground};
`;

export const Wrapper = styled.View<IThemeProps>`
  margin: 24px 14px;
  display: flex;
  flex-direction: row;
`;
