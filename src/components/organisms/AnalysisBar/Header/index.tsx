import React from "react";
import { Bar } from "react-native-progress";
import { useTheme } from "styled-components";

import { ITheme } from "../../../../theme";
import { Avatar } from "../../../molecules/Avatar";
import { ProgressConter } from "../../../molecules/ProgressCounter";

import { Wrapper, HorizontalWrapper } from "./style";

interface IProps {
  initial: string;
  done?: number;
  total?: number;
  handleLogout?: VoidFunction;
}

export const Header: React.FC<IProps> = ({
  initial,
  done = 0,
  total = 0,
  handleLogout = () => {},
}) => {
  const theme = useTheme() as ITheme;

  return (
    <Wrapper>
      <Bar
        indeterminate={total === 0}
        progress={done / total}
        width={null}
        color={theme.colors.primary}
        borderWidth={0}
        borderRadius={0}
      />
      <HorizontalWrapper>
        <ProgressConter done={done} total={total} />
        <Avatar
          touchableProps={{
            onPress: handleLogout,
          }}
        >
          {initial}
        </Avatar>
      </HorizontalWrapper>
    </Wrapper>
  );
};
