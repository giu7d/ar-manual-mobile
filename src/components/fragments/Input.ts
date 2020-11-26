import styled from "styled-components/native";

export const Input = styled.TextInput`
  padding: 14px 24px;
  margin: 8px 0;
  min-width: 100%;
  font-weight: 600;
  font-size: 18px;
  border: 1px solid rgba(0, 0, 0, 0.2);
  color: ${({ theme }) => theme.colors.text};
  border-radius: ${({ theme }) => `${theme.roundness}px`};
`;
