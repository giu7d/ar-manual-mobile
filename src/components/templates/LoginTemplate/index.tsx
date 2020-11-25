import React from "react";
import { ScrollView, KeyboardAvoidingView } from "react-native";
import { GlobalStyle } from "../../../styles/global";
import { Wrapper, Title } from "./styles";

export const LoginTemplate: React.FC = (props) => {
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
            {props.children}
          </Wrapper>
        </ScrollView>
      </KeyboardAvoidingView>
    </GlobalStyle>
  );
};
