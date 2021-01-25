import React from "react";
import { Bar } from "react-native-progress";
import { useTheme } from "styled-components";

import { ProgressConter } from "../../ProgressCounter";

import { Wrapper, HorizontalWrapper } from "./style";

interface IProps {
  done?: number;
  total?: number;
}

export const Header: React.FC<IProps> = ({ children, done = 0, total = 0 }) => {
  const theme = useTheme();

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
        {children}
      </HorizontalWrapper>
    </Wrapper>
  );
};
