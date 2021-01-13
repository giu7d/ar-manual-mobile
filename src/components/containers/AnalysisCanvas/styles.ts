import styled from "styled-components/native";
import { rgba } from "polished";

import { IconButton } from "../../fragments/IconButton";

export const Wrapper = styled.View`
  display: flex;
  flex-direction: column;
  flex: 1 1;
  width: 70%;
  height: 100%;
  align-self: flex-start;
  background-color: ${({ theme }) => theme.colors.text};
`;

export const HeaderWrapper = styled.View`
  position: absolute;
  display: flex;
  flex-direction: row;
  top: 0px;
  left: 0px;
  padding: 24px;
  z-index: 99;
  width: 100%;
  justify-content: space-between;
`;

export const CanvasIconButton = styled(IconButton)`
  margin: 0 8px;
  background-color: ${({ theme }) => rgba(theme.colors.foreground, 0.4)};
  color: ${({ theme }) => theme.colors.text};
`;
