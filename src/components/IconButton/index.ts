import styled from "styled-components/native";
import { ITheme } from "../../theme";

interface IThemeProps {
  theme: ITheme;
}

export const IconButton = styled.TouchableOpacity<IThemeProps>`
  width: 54px;
  height: 54px;
  border-radius: 54px;
  background: rgba(0, 0, 0, 0);
  align-items: center;
  justify-content: center;
`;
