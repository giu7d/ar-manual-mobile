import React from "react";
import { ScrollView } from "react-native-gesture-handler";
import { Feather as Icon } from "@expo/vector-icons";

import { Avatar } from "../../molecules/Avatar";
import { IconButton } from "../../atoms/IconButton";
import {
  Wrapper,
  HeaderWrapper,
  ActionsWrapper,
  ScrollWrapper,
  TitleWrapper,
  Title,
} from "./styles";

export interface IAnalysisBarProps {
  children?: Array<JSX.Element> | JSX.Element;
  handleLogout?: VoidFunction;
}

export const AnalysisBar: React.FC<IAnalysisBarProps> = ({
  children,
  handleLogout = () => {},
}) => {
  return (
    <Wrapper>
      <HeaderWrapper>
        <ActionsWrapper>
          <IconButton>
            <Icon name="bell" size={24} />
          </IconButton>
          <Avatar touchableProps={{ onPress: handleLogout }}>PH</Avatar>
        </ActionsWrapper>
      </HeaderWrapper>
      <ScrollWrapper>
        <ScrollView>
          <TitleWrapper>
            <Icon name="layers" size={24} />
            <Title>Instruções</Title>
          </TitleWrapper>
          {children}
        </ScrollView>
      </ScrollWrapper>
    </Wrapper>
  );
};
