import React from "react";
import { Feather as Icon } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import {
  Wrapper,
  CanvasWrapper,
  InstructionWrapper,
  Header,
  Title,
  Actions,
  InformationWrapper,
  InformationContent,
  InformationContentGroup,
  InformationContentTitle,
  InformationContentValue,
  AppBarWrapper,
} from "./styles";
import { GlobalStyle as GlobalWrapper } from "../../styles";
import { IconButton } from "../../components/IconButton";
import { AvatarText, Avatar } from "../../components/Avatar";
import { Theme } from "../../theme";

export interface Props {}

export const Analysis: React.FC<Props> = (props) => {
  const navigation = useNavigation();

  const handleLogout = () => {
    navigation.navigate("Login");
  };

  return (
    <GlobalWrapper>
      <Wrapper>
        <CanvasWrapper>
          <AppBarWrapper>
            <IconButton
              style={{
                backgroundColor: Theme.colors.foreground,
                opacity: 0.5,
              }}
            >
              <Icon name="chevron-left" size={24} />
            </IconButton>
            <IconButton
              style={{
                backgroundColor: Theme.colors.foreground,
                opacity: 0.5,
              }}
            >
              <Icon name="book" size={24} />
            </IconButton>
          </AppBarWrapper>
          <InformationWrapper>
            <Icon
              name="alert-circle"
              size={24}
              color={Theme.colors.foreground}
            />
            <InformationContent>
              <InformationContentGroup>
                <InformationContentTitle>
                  Galga de controle
                </InformationContentTitle>
                <InformationContentValue>C24105974</InformationContentValue>
              </InformationContentGroup>
              <InformationContentGroup>
                <InformationContentTitle>Componente</InformationContentTitle>
                <InformationContentValue>1697143X</InformationContentValue>
              </InformationContentGroup>
            </InformationContent>
          </InformationWrapper>
        </CanvasWrapper>
        <InstructionWrapper>
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
        </InstructionWrapper>
      </Wrapper>
    </GlobalWrapper>
  );
};
