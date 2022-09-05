import * as React from "react";
import { StyleProp, ViewStyle, Image, StyleSheet } from "react-native";

type HomeIconType = {
  style?: StyleProp<ViewStyle>;
};

const HomeIcon = ({ style }: HomeIconType) => {
  return (
    <Image
      style={[styles.homeIcon, style]}
      resizeMode="cover"
      source={require("../assets/home.png")}
    />
  );
};

const styles = StyleSheet.create({
  homeIcon: {
    position: "relative",
    width: 48,
    height: 48,
  },
});

export default HomeIcon;
