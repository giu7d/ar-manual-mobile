import React from "react";
import { Feather as Icon } from "@expo/vector-icons";

import { IconButton } from "../IconButton";
import { ActionsWrapper } from "../../containers/AppBar/styles";
import { HeaderAppBarWrapper } from "./styles";

interface IHeaderAppBarProps {
  handleGoBack?: VoidFunction;
}

export const HeaderAppBar: React.FC<IHeaderAppBarProps> = ({
  handleGoBack = () => {},
}) => {
  return (
    <HeaderAppBarWrapper>
      <ActionsWrapper
        style={{ alignItems: "flex-start", justifyContent: "flex-start" }}
      >
        <IconButton onPress={handleGoBack}>
          <Icon name="chevron-left" size={24} />
        </IconButton>
      </ActionsWrapper>
    </HeaderAppBarWrapper>
  );
};
