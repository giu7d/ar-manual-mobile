import React from "react";
import { observer } from "mobx-react";
import { Feather as Icon } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

import { AppBar } from "../../fragments/AppBar";
import { useStores } from "../../../hooks/useStores";
import { GlobalStyle } from "../../../styles/global";
import { Wrapper, Header, Title, Content } from "./styles";

export const HomeTemplate: React.FC = observer((props) => {
  const navigation = useNavigation();

  const { applicationStore } = useStores();

  return (
    <GlobalStyle>
      <AppBar
        initial={applicationStore.account?.initial || ""}
        handleLogout={() => applicationStore.clear()}
        handleQRCodeScan={() => navigation.navigate("QRCodeCamera")}
      >
        <Header>
          <Icon name="book" size={38} />
          <Title>Todos os Manuais</Title>
        </Header>
      </AppBar>
      <Wrapper>
        <Content>{props.children}</Content>
      </Wrapper>
    </GlobalStyle>
  );
});
