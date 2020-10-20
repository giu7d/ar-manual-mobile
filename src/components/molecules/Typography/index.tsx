import React from "react";
import { Wrapper, IconWrapper, Text } from "./styles";
import { Feather as Icon } from "@expo/vector-icons";

interface IProps {
  children: string;
  icon?: string;
}

export const Typography: React.FC<IProps> = ({ children, icon = null }) => {
  return (
    <Wrapper>
      {icon && (
        <IconWrapper>
          <Icon name={icon} size={24} />
        </IconWrapper>
      )}
      <Text>{children}</Text>
    </Wrapper>
  );
};
