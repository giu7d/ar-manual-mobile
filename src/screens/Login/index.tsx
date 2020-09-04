import React, { useState } from "react";
import { useNavigation } from "@react-navigation/native";

import { FormInput } from "../../components/molecules/FormInput";
import { Button } from "../../components/molecules/Button";
import { GlobalStyle as GlobalWrapper } from "../../styles";
import { Wrapper, Title, Divider, Paragraph, HyperLink } from "./styles";
import { useStores } from "../../hooks/useStores";
import { observer } from "mobx-react";
import { Warning } from "../../components/molecules/Warning";

interface ILoginProps {}

export const Login: React.FC<ILoginProps> = observer(() => {
  const navigation = useNavigation();
  const { userStore } = useStores();
  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const [error, setError] = useState<string>();

  const handleSubmit = () => {
    const { email, password } = form;

    if (email === "" || password === "") {
      setError("Os campos são obrigatórios!");
    } else {
      setError(undefined);
      userStore.fetch(email, password);
      navigation.navigate("Home");
    }
  };

  return (
    <GlobalWrapper>
      <Wrapper>
        <Title>Log In</Title>
        {error && <Warning title="Atenção!" description={error} />}
        <FormInput
          label="Email"
          required
          inputProps={{
            placeholder: "you@domain.com",
            keyboardType: "email-address",
            autoCapitalize: "none",
            value: form.email,
            onChange: ({ nativeEvent }) =>
              setForm((state) => ({ ...state, email: nativeEvent.text })),
          }}
        />
        <FormInput
          label="Senha"
          required
          inputProps={{
            placeholder: "******",
            secureTextEntry: true,
            value: form.password,
            onChange: ({ nativeEvent }) =>
              setForm((state) => ({ ...state, password: nativeEvent.text })),
          }}
        />

        <Button onPress={handleSubmit}>Entrar</Button>
        <Divider />
        <Paragraph>
          Não possui acesso? <HyperLink>Entre aqui</HyperLink>
        </Paragraph>
      </Wrapper>
    </GlobalWrapper>
  );
});
