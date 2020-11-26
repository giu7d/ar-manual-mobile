import styled from "styled-components/native";

export const Label = styled.Text`
  display: flex;
  margin: 8px 0;
  font-size: 18px;
  color: ${({ theme }) => theme.colors.text};
`;

export const LabelRequired = styled.Text`
  font-size: 18px;
  color: ${({ theme }) => theme.colors.danger};
`;
