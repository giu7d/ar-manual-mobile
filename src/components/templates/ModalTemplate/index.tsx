import React from "react";
import { ScrollView } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import { observer } from "mobx-react";

import { HeaderAppBar } from "../../fragments/HeaderAppBar";
import { useStores } from "../../../hooks/useStores";
import { GlobalStyle } from "../../../styles/global";
import { Wrapper, FormWrapper, Title, Subtitle } from "./styles";

export const ModalTemplate: React.FC = observer((props) => {
  const navigation = useNavigation();
  const { applicationStore } = useStores();

  const handleGoBack = () => {
    navigation.goBack();
  };

  return (
    <>
      <StatusBar backgroundColor="#FFF" />
      <GlobalStyle>
        <HeaderAppBar
          initial={applicationStore.account?.initial || ""}
          handleGoBack={handleGoBack}
        />
        <Wrapper>
          <ScrollView>
            <FormWrapper>
              <Title>Reportar Falha</Title>
              <Subtitle>
                Preencha os campos a baixo para reportar a falha.
              </Subtitle>
              {props.children}
            </FormWrapper>
          </ScrollView>
        </Wrapper>
      </GlobalStyle>
    </>
  );
});
