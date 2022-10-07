 
import * as React from "react";
import { createStackNavigator } from "@react-navigation/stack";

const Stack = createStackNavigator();

import {
    BlogScreens,
    BlogInfo
} from "app/screens";

export default function BlogNavigation() {
    return (
        <Stack.Navigator
            screenOptions={{
                headerShown: false,
            }}
        >
            <Stack.Screen name="BlogScreens" component={BlogScreens} />
            <Stack.Screen name="BlogInfo" component={BlogInfo} />
        </Stack.Navigator>
    )
}
