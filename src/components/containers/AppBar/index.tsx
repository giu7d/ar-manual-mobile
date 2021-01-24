import React from "react";
import { AntDesign as IconAnt, Feather as Icon } from "@expo/vector-icons";

import { Avatar } from "../../fragments/Avatar";
import { IconButton } from "../../fragments/IconButton";
import { AppBarWrapper, ActionsWrapper } from "./styles";
import { useAccount } from "../../../hooks/useAccount";
import { useNavigation } from "@react-navigation/native";

export const AppBar: React.FC = ({ children }) => {
  const { logoutAccount } = useAccount();
  const navigation = useNavigation();

  const handleQRCode = () => {
    navigation.navigate("QRCodeCamera");
  };

  const handleLogout = () => {
    logoutAccount();
  };

  return (
    <>
      <AppBarWrapper>
        <ActionsWrapper>{children}</ActionsWrapper>
        <ActionsWrapper>
          <IconButton onPress={handleQRCode}>
            <IconAnt name="qrcode" size={28} />
          </IconButton>
          <IconButton
            onPress={handleLogout}
            style={{ marginLeft: 24, opacity: 0.75 }}
          >
            <Icon name="log-out" size={28} />
          </IconButton>
        </ActionsWrapper>
      </AppBarWrapper>
    </>
  );
};
