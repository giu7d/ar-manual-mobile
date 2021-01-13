import styled from "styled-components/native";

export const Wrapper = styled.View`
  margin: 14px;
  padding: 14px;
  min-width: 100%;
  background-color: ${({ theme }) => theme.colors.background};
  border-radius: ${({ theme }) => `${theme.roundness}px`};
`;

export const Title = styled.Text`
  margin-bottom: 8px;
  font-size: 16px;
  font-weight: bold;
  text-transform: uppercase;
  color: ${({ theme }) => theme.colors.text};
  opacity: 0.5;
`;

export const Description = styled.Text`
  font-size: 18px;
  color: ${({ theme }) => theme.colors.text};
`;
