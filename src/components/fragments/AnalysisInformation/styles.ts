import styled from "styled-components/native";

export const Wrapper = styled.View`
  position: absolute;
  display: flex;
  flex-direction: row;
  left: 0;
  bottom: 0;
  z-index: 99;
  margin: 24px;
  padding: 24px;
  background-color: #000000;
  opacity: 0.5;
  border-radius: ${({ theme }) => `${theme.roundness}px`};
`;

export const ContentWrapper = styled.View`
  display: flex;
  flex-direction: column;
  margin-left: 14px;
  width: auto;
  height: auto;
  justify-content: flex-start;
  align-items: flex-start;
`;

export const GroupWrapper = styled.View`
  margin-bottom: 14px;
`;

export const Title = styled.Text`
  margin: 0 8px;
  font-size: 18px;
  text-transform: uppercase;
  color: ${({ theme }) => theme.colors.foreground};
  opacity: 0.75;
`;

export const Description = styled.Text`
  margin: 4px 8px;
  font-size: 18px;
  font-weight: bold;
  text-transform: uppercase;
  color: ${({ theme }) => theme.colors.foreground};
`;
