import * as React from "react";
import { StyleProp, ViewStyle, Image, StyleSheet } from "react-native";

type FeedsIconType = {
  style?: StyleProp<ViewStyle>;
};

const FeedsIcon = ({ style }: FeedsIconType) => {
  return (
    <Image
      style={[styles.feedsIcon, style]}
      resizeMode="cover"
      source={require("../assets/feeds.png")}
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

export default FeedsIcon;
