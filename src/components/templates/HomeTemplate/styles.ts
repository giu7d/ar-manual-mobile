import styled from "styled-components/native";

export const Wrapper = styled.ScrollView`
  display: flex;
  flex-direction: column;
  flex: 1 1;
  width: 99%;
  padding: 0 64px;
  margin: 0 64px;
`;

export const Header = styled.View`
  display: flex;
  flex-direction: row;
  padding: 24px;
  width: 100%;
  height: auto;
  align-items: center;
`;

export const Title = styled.Text`
  margin: 0 14px;
  font-size: 32px;
  font-weight: bold;
  color: ${({ theme }) => theme.colors.text};
`;

export const Content = styled.View`
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: center;
`;
