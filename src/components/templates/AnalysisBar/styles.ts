import styled from "styled-components/native";

export const Wrapper = styled.View`
  display: flex;
  flex-direction: column;
  width: 30%;
  height: 100%;
  background-color: ${({ theme }) => theme.colors.background};
`;

export const ScrollWrapper = styled.View`
  display: flex;
  flex-direction: row;
  width: 100%;
  height: 100%;
`;

export const ActionsWrapper = styled.View`
  display: flex;
  width: 100%;
  padding: 14px;
  margin-top: 14px;
  margin-bottom: 100px;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;
