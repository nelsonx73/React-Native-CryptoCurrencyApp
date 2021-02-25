import React from "react";
import { Text, View, Image } from "react-native";
import { COLORS, FONTS } from "../constants";

export default function TabBarIcon({ focused, icon, title }) {
  return (
    <View>
      <Image
        source={icon}
        style={{
          width: 30,
          height: 30,
          resizeMode: "contain",
          tintColor: focused ? COLORS.primary : COLORS.black,
        }}
      />
      <Text
        style={{
          color: focused ? COLORS.primary : COLORS.black,
          ...FONTS.body5,
        }}
      >
        {title}
      </Text>
    </View>
  );
}
