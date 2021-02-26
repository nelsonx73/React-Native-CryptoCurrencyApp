import React, { useState, useEffect } from "react";

import {
  StyleSheet,
  Text,
  View,
  Button,
  ScrollView,
  ImageBackground,
  FlatList,
  Image,
  TouchableOpacity,
  Alert,
  LogBox,
} from "react-native";

import { PriceAlert, TransactionHistory, CurrencyLabel } from "../components";
import { COLORS, SIZES, FONTS, icons, images, dummyData } from "../constants";

export default function Home({ navigation }) {
  const [trending, setTrending] = useState(dummyData.trendingCurrencies);
  const [transactionHistory, setTransactionHistory] = useState(
    dummyData.transactionHistory
  );

  useEffect(() => {
    LogBox.ignoreLogs(["VirtualizedLists should never be nested"]);
  }, []);

  function renderHeader() {
    function renderItem({ item, index }) {
      return (
        <TouchableOpacity
          style={{
            width: 180,
            paddingHorizontal: SIZES.padding,
            paddingVertical: SIZES.padding,
            marginLeft: index === 0 ? SIZES.padding : 0,
            marginBottom: SIZES.base,
            marginRight: SIZES.radius,
            borderRadius: 10,
            backgroundColor: COLORS.white,
            ...styles.shadow,
          }}
          onPress={() =>
            navigation.navigate("CryptoDetail", { currency: item })
          }
        >
          {/* Currency */}
          <CurrencyLabel
            icon={item.image}
            currency={item.currency}
            code={item.code}
          />
          {/* <View style={{ flexDirection: "row" }}>
            <View>
              <Image
                source={item.image}
                resizeMode="cover"
                style={{ marginTop: 5, width: 25, height: 25 }}
              ></Image>
            </View>
            <View style={{ marginLeft: SIZES.base }}>
              <Text style={{ ...FONTS.h2 }}>${item.currency}</Text>
              <Text style={{ color: COLORS.gray, ...FONTS.body3 }}>
                {item.code}
              </Text>
            </View>
          </View> */}

          {/* Value */}
          <View style={{ marginTop: SIZES.radius }}>
            <Text style={{ ...FONTS.h2 }}>${item.amount}</Text>
            <Text
              style={{
                color: item.type === "I" ? COLORS.green : COLORS.red,
                ...FONTS.h3,
              }}
            >
              {item.changes}
            </Text>
          </View>
        </TouchableOpacity>
      );
    }

    return (
      <View style={{ width: "100%", height: 290, ...styles.shadow }}>
        <ImageBackground
          source={images.banner}
          resizeMode="cover"
          style={{ flex: 1, alignItems: "center" }}
        >
          {/* Notification */}
          <View
            style={{
              marginTop: SIZES.padding * 2,
              width: "100%",
              alignItems: "flex-end",
              paddingHorizontal: SIZES.padding,
            }}
          >
            <TouchableOpacity
              style={{
                width: 35,
                height: 35,
                alignItems: "center",
                justifyContent: "center",
              }}
              onPress={() => Alert.alert("Notification Pressed")}
            >
              <Image
                source={icons.notification_white}
                resizeMode="contain"
                style={{ flex: 1 }}
              />
            </TouchableOpacity>
          </View>

          {/* Balance */}
          <View
            style={{
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Text style={{ color: COLORS.white, ...FONTS.h3 }}>
              Your Porfolio balance
            </Text>
            <Text
              style={{
                marginTop: SIZES.base,
                color: COLORS.white,
                ...FONTS.h1,
              }}
            >
              ${dummyData.portfolio.balance}
            </Text>
            <Text
              style={{
                color: COLORS.white,
                ...FONTS.body5,
              }}
            >
              ${dummyData.portfolio.changes} Last 24 hours
            </Text>
          </View>

          {/* Trending */}
          <View style={{ position: "absolute", bottom: "-30%" }}>
            <Text
              style={{
                marginLeft: SIZES.padding,
                color: COLORS.white,
                ...FONTS.h2,
              }}
            >
              Trending
            </Text>
            <FlatList
              contentContainerStyle={{
                marginTop: SIZES.base,
              }}
              data={trending}
              keyExtractor={(item) => `${item.id}`}
              renderItem={renderItem}
              horizontal
              showsHorizontalScrollIndicator={false}
            />
          </View>
        </ImageBackground>
      </View>
    );
  }

  function renderAlert() {
    return <PriceAlert />;
  }

  function renderNotice() {
    return (
      <View
        style={{
          marginTop: SIZES.padding,
          marginHorizontal: SIZES.padding,
          padding: 20,
          borderRadius: SIZES.radius,
          backgroundColor: COLORS.secondary,
          ...styles.shadow,
        }}
      >
        <Text style={{ color: COLORS.white, ...FONTS.h3 }}>
          Investing Safey
        </Text>
        <Text
          style={{
            marginTop: SIZES.base,
            color: COLORS.white,
            ...FONTS.body4,
            lineHeight: 18,
          }}
        >
          It's very difficult to time an investment, specially when the market
          is volatile. Learn how to use dollar cost averanging to your advantage
        </Text>
        <TouchableOpacity
          style={{ marginTop: SIZES.base }}
          onPress={() => Alert.alert("Learn More Pressed")}
        >
          <Text
            style={{
              textDecorationLine: "underline",
              color: COLORS.green,
              ...FONTS.h3,
            }}
          >
            Learn More
          </Text>
        </TouchableOpacity>
      </View>
    );
  }

  function renderTransactionHistory() {
    return (
      <TransactionHistory
        history={transactionHistory}
        customContainerStyle={styles.shadow}
      />
    );
  }

  return (
    <ScrollView showsHorizontalScrollIndicator={false}>
      <View style={{ flex: 1, paddingBottom: 130 }}>
        {renderHeader()}
        {renderAlert()}
        {renderNotice()}
        {renderTransactionHistory()}
      </View>
    </ScrollView>
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
