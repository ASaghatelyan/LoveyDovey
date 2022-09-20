import * as React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import {
  Login,
  Splash,
  Registration,
  TermsCondition,
  Introduction,
  ChooseCategories
} from "app/screens";
import  ForgotPassNavigation  from "./ForgotPassNavigation";

const Stack = createStackNavigator();

export default function StackNavigation() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="Splash" component={Splash} />
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Registration" component={Registration} />
      <Stack.Screen name="Introduction" component={Introduction} />
      <Stack.Screen name="ChooseCategories" component={ChooseCategories} />
      <Stack.Screen name="TermsCondition" component={TermsCondition} />
      <Stack.Screen name="ForgotPassNavigation" component={ForgotPassNavigation} />

    </Stack.Navigator>
  )
}