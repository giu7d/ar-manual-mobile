import styled from "styled-components/native";
import Constants from "expo-constants";

export const Wrapper = styled.View`
  margin-top: ${Constants.statusBarHeight}px;

  flex: 1 1;
  width: 100%;
  align-items: center;
  justify-content: center;
`;
