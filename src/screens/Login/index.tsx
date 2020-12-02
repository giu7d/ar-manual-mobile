import React, { useEffect, useState } from "react";
import Constants from "expo-constants";
import validatejs from "validate.js";
import { observer } from "mobx-react";
import { useTheme } from "styled-components";

import { FormInput } from "../../components/fragments/FormInput";
import { Button } from "../../components/fragments/Button";
import { useStores } from "../../hooks/useStores";
import { Warning } from "../../components/fragments/Warning";
import { LoginTemplate } from "../../components/templates/LoginTemplate";
import { ILoginFormSchema, LoginFormSchema } from "./LoginFormSchema";
import { authenticate } from "../../services/api";

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
  const { applicationStore } = useStores();
  const theme = useTheme();

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
    try {
      handleValidation();
      const account = await authenticate(form.email, form.password);
      applicationStore.setAccount(account.token);
    } catch (error) {
      setError(error.message);
    }
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
              error !== undefined
                ? theme.colors.background
                : theme.colors.primary,
          },
          disabled: error !== undefined,
        }}
      >
        Entrar
      </Button>
    </LoginTemplate>
  );
});
