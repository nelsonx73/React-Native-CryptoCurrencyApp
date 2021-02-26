import React from "react";
import {
  StyleSheet,
  Platform,
  StatusBar,
  Text,
  SafeAreaView as LocalSafeAreaview,
} from "react-native";

export default (props) => (
  <LocalSafeAreaview style={styles.AndroidSafeArea} {...props}>
    {props.children}
  </LocalSafeAreaview>
);

const styles = StyleSheet.create({
  AndroidSafeArea: {
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
});
