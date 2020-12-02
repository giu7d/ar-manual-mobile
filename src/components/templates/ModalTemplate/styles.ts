import { rgba } from "polished";
import styled from "styled-components/native";

export const Wrapper = styled.View`
  display: flex;
  flex-direction: column;
  flex: 1 1;
  width: 100%;
  background-color: ${({ theme }) => theme.colors.foreground};
  min-height: 100%;
`;

export const ActionsWrapper = styled.View`
  display: flex;
  width: 100%;
  padding: 14px;
  margin-top: 14px;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

export const FormWrapper = styled.View`
  display: flex;
  flex-direction: column;
  padding: 24px;
  width: 50%;
  height: auto;
  margin: auto;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.foreground};
`;

export const Title = styled.Text`
  align-self: center;
  margin: 24px 0 8px 0;
  font-size: 32px;
  font-weight: bold;
  color: ${({ theme }) => theme.colors.text};
`;

export const Subtitle = styled.Text`
  align-self: center;
  margin: 8px 0 24px 0;
  font-size: 18px;
  color: ${({ theme }) => rgba(theme.colors.text, 0.5)};
`;
