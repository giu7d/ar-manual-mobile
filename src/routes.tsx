import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import { Home } from "./screens/Home";
import { Login } from "./screens/Login";
import { Analysis } from "./screens/Analysis";
import { ReportFailure } from "./screens/ReportFailure";
import { ReportFailureCamera } from "./screens/ReportFailureCamera";
import { TestBenchQRCodeCamera } from "./screens/TestBenchQRCodeCamera";

const Stack = createStackNavigator();

export const Routes = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator headerMode="none" initialRouteName="Login">
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Analysis" component={Analysis} />
        <Stack.Screen name="ReportFailure" component={ReportFailure} />
        <Stack.Screen
          name="ReportFailureCamera"
          component={ReportFailureCamera}
        />
        <Stack.Screen name="TestBenchQRCodeCamera" component={TestBenchQRCodeCamera} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
