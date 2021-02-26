import React from "react";

import {
  StyleSheet,
  Text,
  View,
  FlatList,
  Image,
  TouchableOpacity,
  Alert,
} from "react-native";

import { COLOR, SIZES, FONTS, icons, COLORS } from "../constants";

export default function TransactionHistory({ history, customContainerStyle }) {
  function renderItem({ item, index }) {
    return (
      <TouchableOpacity
        style={{
          flexDirection: "row",
          alignItems: "center",
          paddingVertical: SIZES.base,
        }}
        onPress={() => Alert.alert("Transaction Selected")}
      >
        <Image
          source={icons.transaction}
          style={{ width: 30, height: 30, tintColor: COLORS.primary }}
        />

        <View style={{ flex: 1, marginLeft: SIZES.radius }}>
          <Text style={{ ...FONTS.h3 }}>{item.description}</Text>
          <Text style={{ ...FONTS.body4, color: COLORS.gray }}>
            {item.date}
          </Text>
        </View>

        <View
          style={{ flexDirection: "row", height: "100%", alignItems: "center" }}
        >
          <Text
            style={{
              color: item.type === "B" ? COLORS.green : COLORS.black,
              ...FONTS.h3,
            }}
          >
            {item.amount} {item.currency}
          </Text>
          <Image
            source={icons.right_arrow}
            style={{ width: 30, height: 30, tintColor: COLORS.gray }}
          />
        </View>
      </TouchableOpacity>
    );
  }

  return (
    <View
      style={{
        marginTop: SIZES.padding,
        marginHorizontal: SIZES.padding,
        padding: 20,
        borderRadius: SIZES.radius,
        backgroundColor: COLORS.white,
        ...customContainerStyle,
      }}
    >
      <Text style={{ ...FONTS.h2 }}>Transaction History</Text>
      <FlatList
        contentContainerStyle={{ marginTop: SIZES.radius }}
        data={history}
        scrollEnabled={false}
        keyExtractor={(item) => `${item.id}`}
        renderItem={renderItem}
        showsVerticalScrollIndicator={false}
        ItemSeparatorComponent={() => {
          return (
            <View
              style={{
                width: "100%",
                height: 1,
                backgroundColor: COLORS.lightGray,
              }}
            ></View>
          );
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({});
