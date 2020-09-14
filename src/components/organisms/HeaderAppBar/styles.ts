import Constants from "expo-constants";
import styled from "styled-components/native";
import { ITheme } from "../../../theme";
import { AppBarWrapper } from "../AppBar/styles";

interface IAppBarWrapperProps {
  theme: ITheme;
}

export const HeaderAppBarWrapper = styled(AppBarWrapper)<IAppBarWrapperProps>`
  position: absolute;
  top: ${Constants.statusBarHeight}px;
  left: 0;
  background-color: rgba(0, 0, 0, 0);
  z-index: 99;
`;
