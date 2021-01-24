import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { observer } from "mobx-react";

import { Home } from "./screens/Home";
import { Login } from "./screens/Login";
import { Analysis } from "./screens/Analysis";
import { ReportFailure } from "./screens/ReportFailure";
import { FailureCamera } from "./screens/FailureCamera";
import { QRCodeCamera } from "./screens/QRCodeCamera";
import { useAccount } from "./hooks/useAccount";

const Navigator = createStackNavigator();

export const Routes = observer(() => {
  const { account } = useAccount();

  if (!account) {
    return (
      <NavigationContainer>
        <Navigator.Navigator headerMode="none">
          <Navigator.Screen name="Login" component={Login} />
        </Navigator.Navigator>
      </NavigationContainer>
    );
  }

  return (
    <NavigationContainer>
      <Navigator.Navigator headerMode="none" initialRouteName="Home">
        <Navigator.Screen name="Home" component={Home} />
        <Navigator.Screen name="Analysis" component={Analysis} />
        <Navigator.Screen name="FailureModal" component={ReportFailure} />
        <Navigator.Screen name="FailureCamera" component={FailureCamera} />
        <Navigator.Screen name="QRCodeCamera" component={QRCodeCamera} />
      </Navigator.Navigator>
    </NavigationContainer>
  );
});
