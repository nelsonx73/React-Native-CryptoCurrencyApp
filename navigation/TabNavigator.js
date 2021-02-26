import React from "react";
import { View, Text, Image } from "react-native";

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Home, Transaction } from "../screens";

import { COLORS, FONTS, icons } from "../constants";
// import { HomeStackNavigator, SettingsStackNavigator } from "./StackNavigator";

import { TabBarIcon, TabBarCustomButton } from "../components";

const Tab = createBottomTabNavigator();

export default function TabNavigator() {
  return (
    <Tab.Navigator
      tabBarOptions={{
        showLabel: false,
        style: {
          position: "absolute",
          bottom: 0,
          left: 0,
          right: 0,
          elevation: 0,
          backgroundColor: COLORS.white,
          borderTopColor: "transparent",
          height: 100,
        },
      }}
    >
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon: ({ focused }) => (
            <TabBarIcon focused={focused} title={"Home"} icon={icons.home} />
          ),
        }}
      />
      <Tab.Screen
        name="Portfolio"
        component={Home}
        options={{
          tabBarIcon: ({ focused }) => (
            <TabBarIcon
              focused={focused}
              title={"Portfolio"}
              icon={icons.pie_chart}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Transaction"
        component={Home}
        options={{
          tabBarIcon: ({ focused }) => (
            <Image
              source={icons.transaction}
              resizeMode="contain"
              style={{ width: 30, height: 30, tintColor: COLORS.white }}
            />
          ),
          tabBarButton: (props) => <TabBarCustomButton {...props} />,
          // tabBarButton: props => (

          // )
        }}
      />
      <Tab.Screen
        name="Prices"
        component={Home}
        options={{
          tabBarIcon: ({ focused }) => (
            <TabBarIcon
              focused={focused}
              title={"Prices"}
              icon={icons.line_graph}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Settings"
        component={Home}
        options={{
          tabBarIcon: ({ focused }) => (
            <TabBarIcon
              focused={focused}
              title={"Settings"}
              icon={icons.settings}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
}
