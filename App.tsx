import React from "react";
import { StatusBar } from "expo-status-bar";
import { ThemeProvider } from "styled-components/native";

import { Routes } from "./src/routes";
import { Theme } from "./src/theme";

export default function App() {
  return (
    <ThemeProvider theme={Theme}>
      <StatusBar style="auto" />
      <Routes />
    </ThemeProvider>
  );
}
