import * as React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import {
  SettingsScreen,
  ContactUs,
  ChangePasswird,
  TermsCondition,
  PrivacyPolicy,
  IntroSlides
} from "app/screens";

import { NavigationContainer } from '@react-navigation/native';
const Stack = createStackNavigator();

export default function SettingsNavigation() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="SettingsScreen" component={SettingsScreen} />
      <Stack.Screen name="ContactUs" component={ContactUs} />
      <Stack.Screen name="ChangePasswird" component={ChangePasswird} />
      <Stack.Screen name="TermsCondition" component={TermsCondition} />
      <Stack.Screen name="PrivacyPolicy" component={PrivacyPolicy} />
      <Stack.Screen name="IntroSlides" component={IntroSlides} />

    </Stack.Navigator>
  )
}