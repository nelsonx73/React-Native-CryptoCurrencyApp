import React, { useState, useEffect } from "react";

import { NavigationContainer } from "@react-navigation/native";
import { HomeStackNavigator } from "./navigation/StackNavigator";

import * as SplashScreen from "expo-splash-screen";
import { useFonts } from "expo-font";

export default function App() {
  const [loaded] = useFonts({
    "Roboto-Black": require("./assets/fonts/Roboto-Black.ttf"),
    "Roboto-Bold": require("./assets/fonts/Roboto-Bold.ttf"),
    "Roboto-Regular": require("./assets/fonts/Roboto-Regular.ttf"),
  });

  if (!loaded) {
    prepareResources();
    return null;
  } else {
    return (
      <NavigationContainer>
        <HomeStackNavigator />
      </NavigationContainer>
    );
  }

  async function prepareResources() {
    try {
      await performAPICalls();
      // await downloadAssets();
    } catch (error) {
      console.warn(error);
    }
  }

  async function performAPICalls() {}

  async function hideSplash() {
    await SplashScreen.hideAsync();
  }
  // async function downloadAssets() {}
}
