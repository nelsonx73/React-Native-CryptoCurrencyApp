import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import { Home, About, Detail, Settings } from "../screens";

const Stack = createStackNavigator();

const screenOptionStyle = {
  headerShown: false,
  headerStyle: {
    backgroundColor: "#9AC4F8",
  },
  headerTintColor: "white",
  headerBackTitle: "Back",
};

export function HomeStackNavigator() {
  return (
    <Stack.Navigator
      initialRouteName={"Home"}
      screenOptions={screenOptionStyle}
    >
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Detail" component={Detail} />
    </Stack.Navigator>
  );
}

export function AboutStackNavigator() {
  return (
    <Stack.Navigator screenOptions={screenOptionStyle}>
      <Stack.Screen name="About" component={About} />
    </Stack.Navigator>
  );
}

export function SettingsStackNavigator() {
  return (
    <Stack.Navigator screenOptions={screenOptionStyle}>
      <Stack.Screen name="Settings" component={Settings} />
    </Stack.Navigator>
  );
}
