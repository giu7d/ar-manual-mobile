import styled from "styled-components/native";

import { ITheme } from "../../../../theme";

interface IWrapperProps {
  theme: ITheme;
}

export const Wrapper = styled.View<IWrapperProps>`
  display: flex;
  width: 100%;
  padding: 14px;
  margin-top: 14px;
  margin-bottom: 100px;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;
