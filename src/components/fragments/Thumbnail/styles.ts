import styled from "styled-components/native";

import { IconButton } from "../IconButton";

export const Image = styled.Image`
  width: 150px;
  height: 150px;
  border-radius: 8px;
`;

export const CloseButton = styled(IconButton)`
  left: -24px;
  top: -24px;
  background-color: ${({ theme }) => theme.colors.foreground};
`;

export const Wrapper = styled.View`
  margin: 24px 14px;
  display: flex;
  flex-direction: row;
`;
