import React from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

import { COLORS, FONTS } from "../constants";

export default function TabBarCustomButton({ onPress, children }) {
  return (
    <TouchableOpacity
      style={{
        ...styles.button,
        ...styles.background,
        ...styles.shadow,
      }}
      onPress={onPress}
    >
      <LinearGradient
        colors={[COLORS.primary, COLORS.secondary]}
        style={styles.background}
      >
        {children}
      </LinearGradient>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    top: -30,
    justifyContent: "center",
    alignItems: "center",
  },
  background: { width: 70, height: 70, borderRadius: 35 },
  shadow: {
    shadowColor: COLORS.primary,
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  },
});
