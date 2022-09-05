import * as React from "react";
import { createStackNavigator } from "@react-navigation/stack";

const Stack = createStackNavigator();

import {
  Login,
  Splash,
  Registration,
  // GetStarted,
  Introduction,
  ChooseCategories
} from "app/screens";
export default function StackNavigation() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="Splash" component={Splash} />
      {/* <Stack.Screen name="GetStarted" component={GetStarted} /> */}
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Registration" component={Registration} />
      <Stack.Screen name="Introduction" component={Introduction} />
      <Stack.Screen name="ChooseCategories" component={ChooseCategories} />

    </Stack.Navigator>
  )
}