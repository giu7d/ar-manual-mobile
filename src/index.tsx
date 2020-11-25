import "mobx-react-lite/batchingForReactNative";
import registerRootComponent from "expo/build/launch/registerRootComponent";
import React from "react";
import { StatusBar } from "expo-status-bar";
import { ThemeProvider } from "styled-components/native";

import { Theme } from "./themes";
import { Routes } from "./routes";

const App = () => {
  return (
    <ThemeProvider theme={Theme}>
      <StatusBar style="auto" />
      <Routes />
    </ThemeProvider>
  );
};

registerRootComponent(App);
