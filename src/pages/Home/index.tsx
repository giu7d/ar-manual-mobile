import React from "react";
import { Image } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Feather as Icon } from "@expo/vector-icons";

import { Wrapper, Header, Title, Content, Column } from "./styles";
import { GlobalStyle as GlobalWrapper } from "../../styles";
import { Avatar, AvatarText } from "../../components/Avatar";
import { SearchArea, SearchInput } from "../../components/SearchInput";
import { AppBar, ActionsArea } from "../../components/AppBar";
import { IconButton } from "../../components/IconButton";
import { Button, ButtonText } from "../../components/Button";
import {
  Card,
  CardContentGroup,
  CardContent,
  CardImage,
  CardContentTitle,
  CardContentValue,
  CardAction,
  CardContentText,
} from "../../components/Card";

export interface Props {}

export const Home: React.FC<Props> = (props) => {
  const navigation = useNavigation();

  const handleLogout = () => {
    navigation.navigate("Login");
  };

  const handleAnalysis = () => {
    navigation.navigate("Analysis");
  };

  const renderCard = (el: number) => (
    <Card key={el}>
      <CardContent>
        <CardImage>
          <Image
            style={{
              width: "100%",
              height: "100%",
            }}
            source={{
              uri: "https://via.placeholder.com/250x250",
            }}
          />
        </CardImage>
        <CardContentGroup>
          <CardContentText>
            <CardContentTitle>Galga de Controlo</CardContentTitle>
            <CardContentValue>C24105974</CardContentValue>
          </CardContentText>
          <CardContentText>
            <CardContentTitle>Componente</CardContentTitle>
            <CardContentValue>C24105974</CardContentValue>
          </CardContentText>
        </CardContentGroup>
      </CardContent>
      <CardAction>
        <Button style={{ width: "80%" }} onPress={handleAnalysis}>
          <ButtonText>Iniciar Teste</ButtonText>
        </Button>
        <IconButton style={{ width: "20%" }}>
          <Icon name="more-vertical" size={24} />
        </IconButton>
      </CardAction>
    </Card>
  );

  return (
    <GlobalWrapper>
      <AppBar>
        <ActionsArea />
        <SearchArea>
          <Icon name="search" size={24} />
          <SearchInput placeholder="Digite para buscar..." />
        </SearchArea>
        <ActionsArea>
          <IconButton>
            <Icon name="bell" size={24} />
          </IconButton>
          <Avatar onPress={handleLogout}>
            <AvatarText>GS</AvatarText>
          </Avatar>
        </ActionsArea>
      </AppBar>
      <Wrapper>
        <Header>
          <Icon name="book" size={38} />
          <Title>Todos os Manuais</Title>
        </Header>
        <Content>
          <Column>{[0, 1, 2].map(renderCard)}</Column>
          <Column>{[0, 1, 2].map(renderCard)}</Column>
        </Content>
      </Wrapper>
    </GlobalWrapper>
  );
};
