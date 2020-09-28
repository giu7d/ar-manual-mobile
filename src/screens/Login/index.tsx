import React, { useState, useEffect } from "react";
import { ScrollView, KeyboardAvoidingView } from "react-native";
import { useNavigation } from "@react-navigation/native";

import { FormInput } from "../../components/molecules/FormInput";
import { Button } from "../../components/molecules/Button";
import { GlobalStyle as GlobalWrapper } from "../../styles";
import { Wrapper, Title, Divider, Paragraph, HyperLink } from "./styles";
import { useStores } from "../../hooks/useStores";
import { observer } from "mobx-react";
import { Warning } from "../../components/molecules/Warning";
import { validate } from "./LoginFormValidation";

interface ILoginProps {}

export const Login: React.FC<ILoginProps> = observer(() => {
  const navigation = useNavigation();
  const { userStore } = useStores();
  const [error, setError] = useState<string>();
  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  useEffect(() => {
    handleValidation();
  }, [form]);

  const handleValidation = () => {
    const validationError = validate(form);

    if (validationError) {
      setError(validationError[0]);
    } else {
      setError(undefined);
    }
  };

  const handleSubmit = () => {
    handleValidation();
    if (!error) {
      userStore.fetch(form.email, form.password);
      navigation.navigate("Home");
    }
  };

  return (
    <GlobalWrapper>
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
                  setForm((state) => ({
                    ...state,
                    password: nativeEvent.text,
                  })),
              }}
            />
            <Button
              onPress={handleSubmit}
              touchableProps={{ style: { minHeight: 64 } }}
            >
              Entrar
            </Button>
            <Divider />
            <Paragraph>
              Não possui acesso? <HyperLink>Clique aqui</HyperLink>
            </Paragraph>
          </Wrapper>
        </ScrollView>
      </KeyboardAvoidingView>
    </GlobalWrapper>
  );
});
