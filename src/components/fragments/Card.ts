import styled from "styled-components/native";
import { rgba } from "polished";

export const Card = styled.View`
  margin: 14px;
  max-width: 500px;
  height: 300px;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  background-color: ${({ theme }) => theme.colors.foreground};
  border-radius: ${({ theme }) => `${theme.roundness}px`};
`;

export const Content = styled.View`
  display: flex;
  flex-direction: row;
  width: 100%;
  height: auto;
`;

export const Image = styled.View`
  width: 200px;
  height: 200px;
  overflow: hidden;
`;

export const ItemWrapper = styled.View`
  padding: 14px;
  width: 100%;
`;

export const GroupWrapper = styled.View`
  margin: 14px 0;
`;

export const ActionsWrapper = styled.View`
  display: flex;
  flex-direction: row;
  flex: 1;
  padding: 8px 14px;
  background: ${({ theme }) => rgba(theme.colors.text, 0.1)};
  height: auto;
  align-items: center;
  justify-content: center;
`;

export const Title = styled.Text`
  margin: 0 8px;
  font-size: 18px;
  text-transform: uppercase;
  color: ${({ theme }) => theme.colors.text};
  opacity: 0.75;
`;

export const Description = styled.Text`
  margin: 4px 8px;
  font-size: 18px;
  font-weight: bold;
  text-transform: uppercase;
  color: ${({ theme }) => theme.colors.text};
`;
