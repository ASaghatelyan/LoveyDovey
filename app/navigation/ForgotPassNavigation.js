import * as React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import {
  ForgotStepOne,
  ForgotStepTwo,
  ForgotStepThree,
} from "app/screens";

import { NavigationContainer } from '@react-navigation/native';
const Stack = createStackNavigator();

export default function ForgotPassNavigation() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="ForgotStepOne" component={ForgotStepOne} />
      <Stack.Screen name="ForgotStepTwo" component={ForgotStepTwo} />
      <Stack.Screen name="ForgotStepThree" component={ForgotStepThree} />


    </Stack.Navigator>
  )
}