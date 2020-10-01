import React, { useEffect } from "react";
import { observer } from "mobx-react";
import { useNavigation } from "@react-navigation/native";
import { Feather as Icon } from "@expo/vector-icons";

import { AppBar } from "../../components/organisms/AppBar";
import { WorkbenchCard } from "../../components/organisms/WorkbenchCard";
import { Wrapper, Header, Title, Content, Col } from "./styles";
import { GlobalStyle as GlobalWrapper } from "../../styles";
import { useStores } from "../../hooks/useStores";

export interface Props {}

export const Home: React.FC<Props> = observer((props) => {
  const navigation = useNavigation();

  const { testbenchsStore } = useStores();

  useEffect(() => {
    testbenchsStore.fetch();
  }, []);

  const handleLogout = () => {
    navigation.navigate("Login");
  };

  const handleAnalysis = (id: string) => {
    navigation.navigate("Analysis", { id });
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
          {testbenchsStore.testbenchs.map((testbench) => (
            <WorkbenchCard
              key={testbench.id}
              componentSeries={testbench.componentSerialNumber}
              workbenchSeries={testbench.testbenchSerialNumber}
              thumbnailSrc={testbench.thumbnailSrc}
              handleAnalysis={() => handleAnalysis(testbench.id)}
            />
          ))}
        </Content>
      </Wrapper>
    </GlobalWrapper>
  );
});
