import React from "react";
import { AntDesign as IconAnt } from "@expo/vector-icons";

import { Avatar } from "../Avatar";
import { IconButton } from "../IconButton";
import { AppBarWrapper, ActionsWrapper } from "./styles";

export interface IAppBarProps {
  initial: string;
  handleLogout?: VoidFunction;
  handleQRCodeScan?: VoidFunction;
}

export const AppBar: React.FC<IAppBarProps> = ({
  initial,
  children,
  handleLogout = () => {},
  handleQRCodeScan = () => {},
}) => {
  return (
    <>
      <AppBarWrapper>
        <ActionsWrapper>{children}</ActionsWrapper>
        <ActionsWrapper>
          <IconButton onPress={handleQRCodeScan}>
            <IconAnt name="qrcode" size={38} />
          </IconButton>
          {/* <IconButton  style={{marginHorizontal: 24}} onPress={() => setNotificationBar((state) => !state)}>
            <Icon name="bell" size={24} />
          </IconButton> */}
          <Avatar touchableProps={{ onPress: handleLogout }}>{initial}</Avatar>
        </ActionsWrapper>
      </AppBarWrapper>
    </>
  );
};
