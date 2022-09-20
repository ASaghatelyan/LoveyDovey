import * as React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import {
  HomeScreen,
  Profile,
  EditProfile,
  Notification
} from "app/screens";

import { NavigationContainer } from '@react-navigation/native';
const Stack = createStackNavigator();


export default function HomeNavigation() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="HomeScreen" component={HomeScreen} />
      <Stack.Screen name="Profile" component={Profile} />
      <Stack.Screen name="EditProfile" component={EditProfile} />
      <Stack.Screen name="Notification" component={Notification} />


    </Stack.Navigator>
  )
}