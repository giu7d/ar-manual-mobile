import styled from "styled-components/native";

export const Wrapper = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  padding: 24px;
  width: 100%;
  opacity: 0.8;
`;

export const IconWrapper = styled.View`
  margin-right: 14px;
`;

export const Text = styled.Text`
  font-size: 24px;
  font-weight: bold;
  text-transform: capitalize;
  color: ${({ theme }) => theme.colors.text};
`;
