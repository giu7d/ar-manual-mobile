import React, { useEffect, useState } from "react";
import validatejs from "validate.js";

import { FormInput } from "../../components/molecules/FormInput";
import { Button } from "../../components/molecules/Button";
import { useStores } from "../../hooks/useStores";
import { observer } from "mobx-react";
import { Warning } from "../../components/molecules/Warning";
import Constants from "expo-constants";
import { useTheme } from "styled-components";
import { LoginTemplate } from "../../components/templates/LoginTemplate";
import { ILoginFormSchema, LoginFormSchema } from "./LoginFormSchema";

const { LOGIN_USERNAME, LOGIN_PASSWORD } = Constants.manifest.extra;

const validate = (form: ILoginFormSchema) => {
  return validatejs(form, LoginFormSchema, { format: "flat" });
};

export const Login: React.FC = observer(() => {
  const [form, setForm] = useState<ILoginFormSchema>({
    email: LOGIN_USERNAME || "",
    password: LOGIN_PASSWORD || "",
  });
  const [error, setError] = useState<string>();
  const { userStore } = useStores();
  const theme = useTheme();

  useEffect(() => {
    if (userStore.error) {
      setError(userStore.error);
    }
  }, [userStore.error]);

  useEffect(() => {
    handleValidation();
  }, [form]);

  const handleValidation = () => {
    const error = validate(form);
    setError(error ? error[0] : undefined);
  };

  const handleInput = (key: string, value: string) => {
    setForm((state) => ({
      ...state,
      [key]: value,
    }));
  };

  const handleSubmit = async () => {
    handleValidation();
    await userStore.fetch(form.email, form.password);
  };

  return (
    <LoginTemplate>
      {error && <Warning title="Atenção!" description={error} />}
      <FormInput
        label="Email"
        required
        inputProps={{
          placeholder: "you@domain.com",
          keyboardType: "email-address",
          autoCapitalize: "none",
          value: form.email,
          onChange: ({ nativeEvent }) => handleInput("email", nativeEvent.text),
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
            handleInput("password", nativeEvent.text),
        }}
      />
      <Button
        onPress={handleSubmit}
        touchableProps={{
          style: {
            minHeight: 64,
            backgroundColor:
              userStore.status === "pending" || error !== undefined
                ? theme.colors.background
                : theme.colors.primary,
          },
          disabled: userStore.status === "pending" || error !== undefined,
        }}
      >
        Entrar
      </Button>
    </LoginTemplate>
  );
});
