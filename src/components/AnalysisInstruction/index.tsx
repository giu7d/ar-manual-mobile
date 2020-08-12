import React from "react";
import { Feather as Icon } from "@expo/vector-icons";

import { Wrapper, Header, Title, Actions, ScrollWrapper } from "./styles";

import { IconButton } from "../IconButton";
import { AvatarText, Avatar } from "../Avatar";
import { InstructionCard } from "../InstructionCard";
import { ScrollView } from "react-native-gesture-handler";

export interface IAnalysisInstructionProps {
  handleLogout?: VoidFunction;
}

export const AnalysisInstruction: React.FC<IAnalysisInstructionProps> = ({
  handleLogout,
}) => {
  return (
    <Wrapper>
      <Header>
        <Icon name="layers" size={24} />
        <Title>Instruções</Title>
        <Actions>
          <IconButton>
            <Icon name="bell" size={24} />
          </IconButton>
          <Avatar onPress={handleLogout}>
            <AvatarText>GS</AvatarText>
          </Avatar>
        </Actions>
      </Header>
      <ScrollWrapper>
        <ScrollView>
          <InstructionCard selected />
          <InstructionCard />
          <InstructionCard />
        </ScrollView>
      </ScrollWrapper>
    </Wrapper>
  );
};

AnalysisInstruction.defaultProps = {
  handleLogout: () => {},
};
