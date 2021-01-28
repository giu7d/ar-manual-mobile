import React, { useCallback, useState } from "react";
import * as Yup from "yup";
import Constants from "expo-constants";
import { ActivityIndicator } from "react-native";
import { observer } from "mobx-react";
import { Button } from "../fragments/Button";
import { FormInput } from "../fragments/FormInput";
import { Warning } from "../fragments/Warning";
import { useAccount } from "../../hooks/useAccount";
import { useTheme } from "styled-components";

const { LOGIN_USERNAME, LOGIN_PASSWORD } = Constants.manifest.extra;

const LoginSchema = Yup.object().shape({
  email: Yup.string().email().required(),
  password: Yup.string().required(),
});

export const LoginForm: React.FC = observer(() => {
  const theme = useTheme();
  const { isError, isLoading, authAccount, logoutAccount } = useAccount();
  const [error, setError] = useState<string>();
  const [form, setForm] = useState({
    email: LOGIN_USERNAME || "",
    password: LOGIN_PASSWORD || "",
  });

  const handleInput = useCallback((key: string, value: string) => {
    setForm((state) => ({
      ...state,
      [key]: value,
    }));
  }, []);

  const handleSubmit = async () => {
    setError(undefined);
    try {
      await LoginSchema.validate(form);
      await authAccount(form.email, form.password);
    } catch (err) {
      if (err instanceof Yup.ValidationError) {
        setError(err.message);
      }
    }
  };

  if (isLoading) {
    return (
      <ActivityIndicator
        size="large"
        color={theme.colors.primary}
        style={{ margin: 48 }}
      />
    );
  }

  if (isError) {
    return (
      <>
        <Warning
          title="Error"
          description={`A error happened while loading the test benches.\nMore information:`}
          error={isError?.message}
        />
        <Button onPress={() => logoutAccount()}>Go Back</Button>
      </>
    );
  }

  return (
    <>
      {error && (
        <Warning
          title="Warning"
          description={"The following error occurs:"}
          error={error}
        />
      )}
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
        label="Password"
        required
        inputProps={{
          placeholder: "******",
          secureTextEntry: true,
          autoCapitalize: "none",
          value: form.password,
          onChange: ({ nativeEvent }) =>
            handleInput("password", nativeEvent.text),
        }}
      />
      <Button onPress={handleSubmit}>Enter</Button>
    </>
  );
});
