import React from "react";
import { Text } from "react-native";
import { StatusBar } from "expo-status-bar";
import { ThemeProvider } from "styled-components/native";

import Routes from "./src/routes";
import { GlobalStyle } from "./src/styles";
import { Theme } from "./src/theme";
import Login from "./src/pages/Login";

export default function App() {
  return (
    <ThemeProvider theme={Theme}>
      <StatusBar style="auto" />
      <Routes />
    </ThemeProvider>
  );
}
