import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { globalStyles } from "../global/Styles";
import { FONTS } from "../constants/theme";

export default function Transaction() {
  return (
    <View style={globalStyles.container}>
      <Text style={FONTS.h1}>From Transaction Screen</Text>
      <Text>From Transaction Screen</Text>
    </View>
  );
}

const styles = StyleSheet.create({});
