import * as React from "react";
import { createStackNavigator } from "@react-navigation/stack";

const Stack = createStackNavigator();

import {
    CreateEvent,
    AddEvent
} from "app/screens";
export default function CreateEventNavigation() {
    return (
        <Stack.Navigator
            screenOptions={{
                headerShown: false,
            }}
        >
            <Stack.Screen name="CreateEvent" component={CreateEvent} />
            <Stack.Screen name="AddEvent" component={AddEvent} />
        </Stack.Navigator>
    )
}
