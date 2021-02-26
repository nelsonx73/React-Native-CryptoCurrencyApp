import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import { Home, CryptoDetail, Transaction } from "../screens";

import TabNavigator from "./TabNavigator";

const Stack = createStackNavigator();

const screenOptionStyle = {
  headerShown: false,
};

export function HomeStackNavigator() {
  return (
    <Stack.Navigator
      initialRouteName={"Home"}
      screenOptions={screenOptionStyle}
    >
      <Stack.Screen name="Home" component={TabNavigator} />
      <Stack.Screen name="CryptoDetail" component={CryptoDetail} />
      <Stack.Screen name="Transaction" component={Transaction} />
    </Stack.Navigator>
  );
}

// export function AboutStackNavigator() {
//   return (
//     <Stack.Navigator screenOptions={screenOptionStyle}>
//       <Stack.Screen name="About" component={About} />
//     </Stack.Navigator>
//   );
// }

// export function SettingsStackNavigator() {
//   return (
//     <Stack.Navigator screenOptions={screenOptionStyle}>
//       <Stack.Screen name="Settings" component={Settings} />
//     </Stack.Navigator>
//   );
// }

// export function CryptoDetailStackNavigator() {
//   return (
//     <Stack.Navigator screenOptions={screenOptionStyle}>
//       <Stack.Screen name="CrypoDetail" component={CryptoDetail} />
//     </Stack.Navigator>
//   );
// }
