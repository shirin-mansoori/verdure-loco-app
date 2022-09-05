import * as React from "react";
import { StyleProp, ViewStyle, Image, StyleSheet } from "react-native";

type HomeIcon1Type = {
  style?: StyleProp<ViewStyle>;
};

const HomeIcon1 = ({ style }: HomeIcon1Type) => {
  return (
    <Image
      style={[styles.homeIcon, style]}
      resizeMode="cover"
      source={require("../assets/home1.png")}
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

export default HomeIcon1;
