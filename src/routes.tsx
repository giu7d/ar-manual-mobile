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
import { useStores } from "./hooks/useStores";

const Navigator = createStackNavigator();

const PublicRoutes = () => (
  <NavigationContainer>
    <Navigator.Navigator headerMode="none">
      <Navigator.Screen name="Login" component={Login} />
    </Navigator.Navigator>
  </NavigationContainer>
);

export const Routes = observer(() => {
  const { applicationStore } = useStores();

  if (!applicationStore.account) {
    return <PublicRoutes />;
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
