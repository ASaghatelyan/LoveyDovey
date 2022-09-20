import * as React from "react";
import { createStackNavigator } from "@react-navigation/stack";
 
const Stack = createStackNavigator();

import { Login,Splash } from "../screens/stackScreens/login/Login";
export default function StackNavigation() {
  return (
    <Stack.Navigator
    screenOptions={{
      headerShown: false,
    }}
  >
    <Stack.Screen name="Splash" component={Splash} />
    <Stack.Screen name="Login" component={Login} />
 
  </Stack.Navigator>
  )
}