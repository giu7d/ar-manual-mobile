import styled from "styled-components/native";

export const ButtonWrapper = styled.TouchableOpacity`
  margin: 14px 0;
  min-width: 100%;
  height: 64px;
  padding: 14px 24px;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) => theme.colors.primary};
  border-radius: ${({ theme }) => `${theme.roundness}px`};
`;

export const ButtonText = styled.Text`
  font-size: 18px;
  font-weight: bold;
  text-transform: uppercase;
  color: ${({ theme }) => theme.colors.foreground};
`;
