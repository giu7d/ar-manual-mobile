import React from "react";
import { useNavigation } from "@react-navigation/native";

import { FormInput } from "../../components/molecules/FormInput";
import { Button } from "../../components/molecules/Button";
import { GlobalStyle as GlobalWrapper } from "../../styles";
import { Wrapper, Title, Divider, Paragraph, HyperLink } from "./styles";
import { useStores } from "../../hooks/useStores";
import { observer } from "mobx-react";
interface ILoginProps {}

export const Login: React.FC<ILoginProps> = observer(() => {
  const navigation = useNavigation();
  const { globalStore } = useStores();

  const handleLogin = () => {
    globalStore.fetchUser("hello", "word");
    console.log(globalStore.user.email);
    console.log("Home");
    navigation.navigate("Home");
  };

  return (
    <GlobalWrapper>
      <Wrapper>
        <Title>Log In</Title>

        <FormInput
          label="Usuário"
          required
          inputProps={{
            placeholder: "you@domain.com",
            keyboardType: "email-address",
          }}
        />
        <FormInput
          label="Senha"
          required
          inputProps={{
            placeholder: "******",
            secureTextEntry: true,
          }}
        />

        <Button onPress={handleLogin}>Entrar</Button>
        <Divider />
        <Paragraph>
          Não possui acesso? <HyperLink>Entre aqui</HyperLink>
        </Paragraph>
      </Wrapper>
    </GlobalWrapper>
  );
});
