import React from "react";
import { ScrollView } from "react-native-gesture-handler";
import { Feather as Icon } from "@expo/vector-icons";

import { Avatar } from "../../molecules/Avatar";
import { IconButton } from "../../atoms/IconButton";
import {
  Wrapper,
  HeaderWrapper,
  ScrollWrapper,
  TitleWrapper,
  HeaderActionsWrapper,
  Title,
} from "./styles";

export interface IAnalysisBarProps {
  children: Array<JSX.Element> | JSX.Element;
  handleLogout?: VoidFunction;
}

export const AnalysisBar: React.FC<IAnalysisBarProps> = ({
  children,
  handleLogout = () => {},
}) => {
  return (
    <Wrapper>
      <HeaderWrapper>
        <HeaderActionsWrapper>
          <IconButton>
            <Icon name="bell" size={24} />
          </IconButton>
          <Avatar touchableProps={{ onPress: handleLogout }}>PH</Avatar>
        </HeaderActionsWrapper>
      </HeaderWrapper>
      <ScrollWrapper>
        <ScrollView>
          <TitleWrapper>
            <Title>
              <Icon name="layers" size={24} /> Instruções
            </Title>
          </TitleWrapper>
          {children}
        </ScrollView>
      </ScrollWrapper>
    </Wrapper>
  );
};
