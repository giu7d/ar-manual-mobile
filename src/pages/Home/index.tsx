import React from "react";
import { useNavigation } from "@react-navigation/native";
import { Feather as Icon } from "@expo/vector-icons";

import { Avatar, AvatarText } from "../../components/Avatar";
import { SearchArea, SearchInput } from "../../components/SearchInput";
import { AppBar, ActionsArea } from "../../components/AppBar";
import { IconButton } from "../../components/IconButton";
import { GlobalStyle as GlobalWrapper } from "../../styles";
import {
  Wrapper,
  Header,
  Title,
  Content,
  Card,
  CardContentGroup,
  CardContent,
  CardImage,
  CardContentTitle,
  CardContentValue,
  CardAction,
  CardContentText,
  Row,
  Col,
} from "./styles";
import { Button, ButtonText } from "../../components/Button";

export interface Props {}

export const Home: React.FC<Props> = (props) => {
  const navigation = useNavigation();

  const handleLogout = () => {
    navigation.navigate("Login");
  };

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
          <Col>
            {[0, 1, 2].map((el) => (
              <Card key={el}>
                <CardContent>
                  <CardImage />
                  <CardContentGroup>
                    <CardContentText>
                      <CardContentTitle>Galga de Controlo</CardContentTitle>
                      <CardContentValue>C24105974</CardContentValue>
                    </CardContentText>
                    <CardContentText>
                      <CardContentTitle>Galga de Controlo</CardContentTitle>
                      <CardContentValue>C24105974</CardContentValue>
                    </CardContentText>
                  </CardContentGroup>
                </CardContent>
                <CardAction>
                  <Button style={{ width: "80%" }}>
                    <ButtonText>Iniciar Teste</ButtonText>
                  </Button>
                  <IconButton style={{ width: "20%" }}>
                    <Icon name="more-vertical" size={24} />
                  </IconButton>
                </CardAction>
              </Card>
            ))}
          </Col>
          <Col>
            {[0, 1, 2].map((el) => (
              <Card key={el}>
                <CardContent>
                  <CardImage />
                  <CardContentGroup>
                    <CardContentText>
                      <CardContentTitle>Galga de Controlo</CardContentTitle>
                      <CardContentValue>C24105974</CardContentValue>
                    </CardContentText>
                    <CardContentText>
                      <CardContentTitle>Galga de Controlo</CardContentTitle>
                      <CardContentValue>C24105974</CardContentValue>
                    </CardContentText>
                  </CardContentGroup>
                </CardContent>
                <CardAction>
                  <Button style={{ width: "80%" }}>
                    <ButtonText>Iniciar Teste</ButtonText>
                  </Button>
                  <IconButton style={{ width: "20%" }}>
                    <Icon name="more-vertical" size={24} />
                  </IconButton>
                </CardAction>
              </Card>
            ))}
          </Col>
        </Content>
      </Wrapper>
    </GlobalWrapper>
  );
};
