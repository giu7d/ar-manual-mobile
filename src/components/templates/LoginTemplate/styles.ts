import styled from "styled-components/native";

export const Wrapper = styled.View`
  display: flex;
  flex-direction: column;
  padding: 24px;
  width: 450px;
  height: auto;
  margin: auto;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.foreground};
  border-radius: ${({ theme }) => `${theme.roundness}px`};
`;

export const Title = styled.Text`
  margin: 24px 0;
  font-size: 32px;
  font-weight: bold;
  color: ${({ theme }) => theme.colors.text};
`;
