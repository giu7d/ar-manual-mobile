import styled from "styled-components/native";
import { ITheme } from "../../../../theme";

interface IWrapperProps {
  theme: ITheme;
}

export const Wrapper = styled.View<IWrapperProps>`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: auto;
`;

export const HorizontalWrapper = styled.View<IWrapperProps>`
  display: flex;
  flex-direction: row;
  padding: 14px 24px;
  width: 100%;
  height: auto;
  align-items: center;
  justify-content: space-between;
`;
