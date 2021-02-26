import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";

import { COLORS, SIZES, FONTS } from "../constants";

export default function CurrencyLabel({ icon, currency, code }) {
  return (
    <View style={{ flexDirection: "row" }}>
      <View>
        <Image
          source={icon}
          resizeMode="cover"
          style={{ marginTop: 5, width: 25, height: 25 }}
        ></Image>
      </View>
      <View style={{ marginLeft: SIZES.base }}>
        <Text style={{ ...FONTS.h2 }}>{currency}</Text>
        <Text style={{ color: COLORS.gray, ...FONTS.body3 }}>{code}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({});
