import "mobx-react-lite/batchingForReactNative";
import registerRootComponent from "expo/build/launch/registerRootComponent";
import React from "react";
import Constants from "expo-constants";
import * as Sentry from "sentry-expo";
import { StatusBar } from "expo-status-bar";
import { ThemeProvider } from "styled-components/native";

import { Theme } from "./themes";
import { Routes } from "./routes";

const { SENTRY_DSN = "", SENTRY_DEBUG } = Constants.manifest.extra;

Sentry.init({
  dsn: SENTRY_DSN,
  debug: SENTRY_DEBUG,
  enableInExpoDevelopment: true,
});

const App = () => {
  return (
    <ThemeProvider theme={Theme}>
      <StatusBar style="auto" />
      <Routes />
    </ThemeProvider>
  );
};

registerRootComponent(App);
