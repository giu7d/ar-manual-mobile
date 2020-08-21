import React from "react";
import { StatusBar } from "expo-status-bar";
import { ThemeProvider } from "styled-components/native";

import { Theme } from "./src/theme";
import { View } from "react-native";

import { Button } from "./src/components/molecules/Button";
import { FormInput } from "./src/components/molecules/FormInput";

const Test = () => {
  return (
    <View
      style={{
        width: "100%",
        height: "100%",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <FormInput label="Hello" />
      <Button>Hello World</Button>
    </View>
  );
};

export default function App() {
  return (
    <ThemeProvider theme={Theme}>
      <StatusBar style="auto" />
      <Test />
    </ThemeProvider>
  );
}
