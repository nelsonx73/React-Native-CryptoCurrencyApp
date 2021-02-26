import React, { useEffect, useState } from "react";
import { StyleSheet, Text, View, ScrollView, Alert } from "react-native";

import { COLORS, SIZES, FONTS, icons, images, dummyData } from "../constants";
import {
  SafeAreaView,
  HeaderBar,
  CurrencyLabel,
  TextButton,
  TransactionHistory,
} from "../components";

export default function Transaction({ route, navigation }) {
  const [selectedCurrency, setSelectedCurrency] = useState(null);

  useEffect(() => {
    const { currency } = route.params;
    setSelectedCurrency(currency);
  }, []);

  function renderTrade() {
    return (
      <View
        style={{
          marginTop: SIZES.padding,
          marginHorizontal: SIZES.radius,
          padding: SIZES.padding,
          borderRadius: SIZES.radius,
          backgroundColor: COLORS.white,
          ...styles.shadow,
        }}
      >
        <CurrencyLabel
          icon={selectedCurrency?.image}
          currency={`${selectedCurrency?.currency}`}
          code={selectedCurrency?.code}
        />

        <View
          style={{
            marginTop: SIZES.padding,
            marginBottom: SIZES.padding * 1.5,
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Text style={{ ...FONTS.h2 }}>
            {selectedCurrency?.wallet.crypto}
            {selectedCurrency?.code}
          </Text>
          <Text
            style={{
              color: COLORS.gray,
              ...FONTS.body4,
            }}
          >
            ${selectedCurrency?.wallet.value}
          </Text>
        </View>

        <TextButton label="Trade" onPress={() => Alert.alert("Trade")} />
      </View>
    );
  }

  function renderTransactionHistory() {
    return (
      <TransactionHistory
        customContainerStyle={styles.shadow}
        history={selectedCurrency?.transactionHistory}
      />
    );
  }

  return (
    <SafeAreaView>
      <HeaderBar />

      <ScrollView>
        <View style={{ flex: 1, paddingBottom: SIZES.padding }}>
          {renderTrade()}
          {renderTransactionHistory()}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },

  shadow: {
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.3,
    shadowRadius: 4.65,

    elevation: 8,
  },
});
