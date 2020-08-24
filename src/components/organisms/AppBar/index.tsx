import React from "react";
import { AppBarWrapper, ActionsWrapper } from "./styles";
import { SearchInput } from "../../molecules/SearchInput";
import { IconButton } from "../../atoms/IconButton";
import { Feather as Icon } from "@expo/vector-icons";
import { Avatar } from "../../molecules/Avatar";

export interface IAppBarProps {
  handleLogout?: VoidFunction;
}

export const AppBar: React.FC<IAppBarProps> = ({ handleLogout = () => {} }) => {
  return (
    <AppBarWrapper>
      <ActionsWrapper />
      <SearchInput />
      <ActionsWrapper>
        <IconButton>
          <Icon name="bell" size={24} />
        </IconButton>
        <Avatar touchableProps={{ onPress: handleLogout }}>PS</Avatar>
      </ActionsWrapper>
    </AppBarWrapper>
  );
};
