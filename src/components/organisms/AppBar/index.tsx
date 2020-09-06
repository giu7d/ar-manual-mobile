import React, { useState } from "react";
import { AppBarWrapper, ActionsWrapper } from "./styles";
import { SearchInput } from "../../molecules/SearchInput";
import { IconButton } from "../../atoms/IconButton";
import { Feather as Icon } from "@expo/vector-icons";
import { Avatar } from "../../molecules/Avatar";
import { SideBar } from "../../molecules/SideBar";

export interface IAppBarProps {
  initial: string;
  handleLogout?: VoidFunction;
}

export const AppBar: React.FC<IAppBarProps> = ({
  initial,
  handleLogout = () => {},
}) => {
  const [notificationBar, setNotificationBar] = useState(false);

  return (
    <>
      <AppBarWrapper>
        <ActionsWrapper />
        <SearchInput />
        <ActionsWrapper>
          <IconButton onPress={() => setNotificationBar((state) => !state)}>
            <Icon name="bell" size={24} />
          </IconButton>
          <Avatar touchableProps={{ onPress: handleLogout }}>{initial}</Avatar>
        </ActionsWrapper>
      </AppBarWrapper>
      <SideBar
        enable={notificationBar}
        handleChange={(state: boolean) => setNotificationBar(state)}
      />
    </>
  );
};
