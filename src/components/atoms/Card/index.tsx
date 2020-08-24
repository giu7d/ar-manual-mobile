import styled from "styled-components/native";
import { ITheme } from "../../../theme";

interface ICardProps {
  theme: ITheme;
}

export const Card = styled.View<ICardProps>`
  margin: 14px;
  display: flex;
  flex-direction: column;
  flex: 1;
  overflow: hidden;
  background-color: ${({ theme }) => theme.colors.foreground};
  border-radius: ${({ theme }) => `${theme.roundness}px`};
`;

export const Content = styled.View<ICardProps>`
  display: flex;
  flex-direction: row;
  width: 100%;
  height: auto;
`;

export const Image = styled.View<ICardProps>`
  width: 200px;
  height: 200px;
  overflow: hidden;
`;

export const ItemWrapper = styled.View<ICardProps>`
  padding: 14px;
  width: 100%;
`;

export const GroupWrapper = styled.View<ICardProps>`
  margin: 14px 0;
`;

export const ActionsWrapper = styled.View<ICardProps>`
  display: flex;
  flex-direction: row;
  flex: 1;
  padding: 8px 14px;
  height: auto;
  background-color: #e5e5e5;
  align-items: center;
  justify-content: center;
`;

export const Title = styled.Text<ICardProps>`
  margin: 0 8px;
  font-size: 18px;
  text-transform: uppercase;
  color: ${({ theme }) => theme.colors.text};
  opacity: 0.75;
`;

export const Description = styled.Text<ICardProps>`
  margin: 4px 8px;
  font-size: 18px;
  font-weight: bold;
  text-transform: uppercase;
  color: ${({ theme }) => theme.colors.text};
`;
