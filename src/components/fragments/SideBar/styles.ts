import styled from "styled-components/native";
import Constants from "expo-constants";

interface IWrapperProps {
  side: "left" | "right";
}

export const Wrapper = styled.View<IWrapperProps>`
  position: absolute;
  top: ${Constants.statusBarHeight}px;
  ${({ side }) => {
    if (side === "left") {
      return "left: 0";
    }
    return "right: 0";
  }};
  padding: 24px;
  height: 100%;
  width: 450px;
  z-index: 9999;
  background-color: ${({ theme }) => theme.colors.foreground};
`;
