import styled from "styled-components/native";
import { ITheme } from "../../../../theme";

interface IWrapperProps {
  theme: ITheme;
}

export const Wrapper = styled.View<IWrapperProps>`
  display: flex;
  flex-direction: row;
  padding: 24px 14px;
  width: 100%;
  height: auto;
  align-items: center;
  justify-content: space-between;
`;
