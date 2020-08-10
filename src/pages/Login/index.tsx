import React from "react";
import { useNavigation } from "@react-navigation/native";

import { Wrapper, Title, Divider, Paragraph, HyperLink } from "./styles";
import { GlobalStyle as GlobalWrapper } from "../../styles";
import { InputArea, Label, Input, Required } from "../../components/Input";
import { Button, ButtonText } from "../../components/Button";

interface ILoginProps {}

export const Login: React.FC<ILoginProps> = (props) => {
  const navigation = useNavigation();

  const handleLogin = () => {
    navigation.navigate("Home");
  };

  return (
    <GlobalWrapper>
      <Wrapper>
        <Title>Log In</Title>
        <InputArea>
          <Label>
            Usuário<Required>*</Required>
          </Label>
          <Input placeholder="you@domain.com" keyboardType="email-address" />
        </InputArea>
        <InputArea>
          <Label>
            Senha<Required>*</Required>
          </Label>
          <Input placeholder="******" secureTextEntry={true} />
        </InputArea>
        <Button onPress={handleLogin}>
          <ButtonText>Entrar</ButtonText>
        </Button>
        <Divider />
        <Paragraph>
          Não possui acesso? <HyperLink>Entre aqui</HyperLink>
        </Paragraph>
      </Wrapper>
    </GlobalWrapper>
  );
};
