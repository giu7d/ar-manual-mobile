import React from "react";
import { useNavigation } from "@react-navigation/native";
import { Feather as Icon } from "@expo/vector-icons";

import { AppBar } from "../../components/organisms/AppBar";
import { WorkbenchCard } from "../../components/organisms/WorkbenchCard";
import { Wrapper, Header, Title, Content, Col } from "./styles";
import { GlobalStyle as GlobalWrapper } from "../../styles";

export interface Props {}

export const Home: React.FC<Props> = (props) => {
  const navigation = useNavigation();

  const handleLogout = () => {
    navigation.navigate("Login");
  };

  const handleAnalysis = () => {
    navigation.navigate("Analysis");
  };

  return (
    <GlobalWrapper>
      <AppBar initial="G" handleLogout={handleLogout} />
      <Wrapper>
        <Header>
          <Icon name="book" size={38} />
          <Title>Todos os Manuais</Title>
        </Header>
        <Content>
          <Col>
            {[0, 1, 2].map((i) => (
              <WorkbenchCard
                key={i}
                componentSeries="cmpsrs"
                workbenchSeries="wksrs"
                handleAnalysis={handleAnalysis}
              />
            ))}
          </Col>
          <Col>
            {[4, 5, 6].map((i) => (
              <WorkbenchCard
                key={i}
                componentSeries="cmpsrs"
                workbenchSeries="wksrs"
                handleAnalysis={handleAnalysis}
              />
            ))}
          </Col>
        </Content>
      </Wrapper>
    </GlobalWrapper>
  );
};
