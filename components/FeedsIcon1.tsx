import * as React from "react";
import { StyleProp, ViewStyle, Image, StyleSheet } from "react-native";

type FeedsIcon1Type = {
  style?: StyleProp<ViewStyle>;
};

const FeedsIcon1 = ({ style }: FeedsIcon1Type) => {
  return (
    <Image
      style={[styles.feedsIcon, style]}
      resizeMode="cover"
      source={require("../assets/feeds1.png")}
    />
  );
};

const styles = StyleSheet.create({
  feedsIcon: {
    position: "relative",
    width: 48,
    height: 48,
  },
});

export default FeedsIcon1;
