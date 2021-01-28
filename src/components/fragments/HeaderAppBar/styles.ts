import Constants from "expo-constants";
import styled from "styled-components/native";
import { AppBarWrapper } from "../../containers/AppBar/styles";

export const HeaderAppBarWrapper = styled(AppBarWrapper)`
  position: absolute;
  top: ${Constants.statusBarHeight}px;
  left: 0;
  background-color: rgba(0, 0, 0, 0);
  z-index: 99;
`;
