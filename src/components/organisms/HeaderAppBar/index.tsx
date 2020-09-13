import React from "react";
import { Feather as Icon } from "@expo/vector-icons";

import { IconButton } from "../../atoms/IconButton";
import { Avatar } from "../../molecules/Avatar";
import { ActionsWrapper, AppBarWrapper } from "../AppBar/styles";

interface IHeaderAppBarProps {
  initial: string;
  handleLogout?: VoidFunction;
  handleGoBack?: VoidFunction;
}

export const HeaderAppBar: React.FC<IHeaderAppBarProps> = ({
  initial,
  handleLogout = () => {},
  handleGoBack = () => {},
}) => {
  return (
    <>
      <AppBarWrapper>
        <ActionsWrapper
          style={{ alignItems: "flex-start", justifyContent: "flex-start" }}
        >
          <IconButton onPress={handleGoBack}>
            <Icon name="chevron-left" size={24} />
          </IconButton>
        </ActionsWrapper>
        <ActionsWrapper>
          <Avatar touchableProps={{ onPress: handleLogout }}>{initial}</Avatar>
        </ActionsWrapper>
      </AppBarWrapper>
    </>
  );
};
