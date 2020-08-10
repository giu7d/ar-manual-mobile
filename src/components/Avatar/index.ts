import styled from "styled-components/native";
import { ITheme } from "../../theme";

interface IThemeProps {
  theme: ITheme;
}

export const Avatar = styled.TouchableOpacity<IThemeProps>`
  margin: 0 24px;
  width: 54px;
  height: 54px;
  border-radius: 54px;
  background: #ccc;
  align-items: center;
  justify-content: center;
`;

export const AvatarText = styled.Text<IThemeProps>`
  font-size: 18px;
  font-weight: bold;
  opacity: 0.5;
`;
