import React from "react";
import { observer } from "mobx-react";
import { KeyboardAvoidingView } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import { LoginForm } from "../../components/containers/LoginForm";
import { GlobalStyle } from "../../styles/global";
import { Wrapper, Title } from "./styles";

export const Login: React.FC = observer(() => {
  return (
    <GlobalStyle>
      <KeyboardAvoidingView style={{ width: "100%" }}>
        <ScrollView
          contentContainerStyle={{
            alignItems: "center",
            justifyContent: "center",
          }}
          style={{
            width: "100%",
          }}
        >
          <Wrapper>
            <Title>Log In</Title>
            <LoginForm />
          </Wrapper>
        </ScrollView>
      </KeyboardAvoidingView>
    </GlobalStyle>
  );
});
