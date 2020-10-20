import React from "react";

import { Avatar } from "../../../molecules/Avatar";
import { ProgressConter } from "../../../molecules/ProgressCounter";

import { Wrapper } from "./style";

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
  return (
    <Wrapper>
      <ProgressConter done={done} total={total} />
      <Avatar
        touchableProps={{
          onPress: handleLogout,
        }}
      >
        {initial}
      </Avatar>
    </Wrapper>
  );
};
