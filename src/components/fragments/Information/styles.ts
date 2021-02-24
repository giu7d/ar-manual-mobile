import styled from "styled-components/native";

export const Wrapper = styled.View`
  padding: 24px;
  flex-basis: 650px;
  flex-grow: 0;
  flex-shrink: 1;
  flex-direction: row;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.foreground};
  border-radius: ${({ theme }) => `${theme.roundness}px`};
`;

export const ContentWrapper = styled.View`
  margin-left: 24px;
`;

export const Title = styled.Text`
  margin-bottom: 8px;
  font-size: 22px;
  font-weight: bold;
  text-transform: uppercase;
  color: ${({ theme }) => theme.colors.primary};
`;

export const Description = styled.Text`
  font-size: 18px;
  color: ${({ theme }) => theme.colors.text};
`;

export const AdditionalDescription = styled.Text`
  margin-top: 8px;
  font-size: 18px;
  font-style: italic;
  color: ${({ theme }) => theme.colors.text};
  opacity: 0.75;
`;
