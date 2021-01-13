import styled from "styled-components/native";
import { rgba } from "polished";

interface IDescriptionProps {
  isHidden?: boolean;
}

export const Wrapper = styled.TouchableOpacity`
  display: flex;
  flex-direction: column;
  margin: 14px 24px;
  width: 90%;
  height: auto;
  overflow: hidden;
  background-color: ${({ theme }) => theme.colors.foreground};
  border-radius: ${({ theme }) => `${theme.roundness}px`};
`;

export const ContentWrapper = styled.View`
  display: flex;
  flex-direction: column;
  margin: 14px;
  padding: 14px;
`;

export const ContentHeaderWrapper = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export const Title = styled.Text`
  font-size: 18px;
  font-weight: bold;
  text-transform: uppercase;
  color: ${({ theme }) => theme.colors.text};
`;

export const Step = styled.Text`
  margin-bottom: 8px;
  font-size: 16px;
  font-weight: bold;
  text-transform: uppercase;
  color: ${({ theme }) => theme.colors.text};
  opacity: 0.5;
`;

export const Description = styled.ScrollView<IDescriptionProps>`
  font-size: 18px;
  width: 100%;
  height: ${({ isHidden = false }) => (isHidden ? "80px" : "auto")};
  overflow: hidden;
  color: ${({ theme }) => theme.colors.text};
`;

export const ActionsWrapper = styled.View`
  flex-direction: row;
  padding: 0 14px;
  height: auto;
  background-color: ${({ theme }) => rgba(theme.colors.background, 0.5)};
  align-items: center;
  justify-content: space-between;
`;
