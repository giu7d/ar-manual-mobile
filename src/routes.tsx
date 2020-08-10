import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import { Home } from "./pages/Home";
import { Analysis } from "./pages/Analysis";
import { Login } from "./pages/Login";

const Stack = createStackNavigator();

export const Routes = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator headerMode="none" initialRouteName="Login">
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Analysis" component={Analysis} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
