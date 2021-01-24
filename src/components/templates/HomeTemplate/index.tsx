import React from "react";
import { observer } from "mobx-react";
import { Feather as Icon } from "@expo/vector-icons";

import { AppBar } from "../../containers/AppBar";
import { GlobalStyle } from "../../../styles/global";
import { Wrapper, Header, Title, Content } from "./styles";

export const HomeTemplate: React.FC = observer((props) => {
  return (
    <GlobalStyle>
      <AppBar>
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
