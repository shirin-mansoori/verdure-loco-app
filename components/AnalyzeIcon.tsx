import * as React from "react";
import { StyleProp, ViewStyle, Image, StyleSheet } from "react-native";

type AnalyzeIconType = {
  style?: StyleProp<ViewStyle>;
};

const AnalyzeIcon = ({ style }: AnalyzeIconType) => {
  return (
    <Image
      style={[styles.analyzeIcon, style]}
      resizeMode="cover"
      source={require("../assets/analyze.png")}
    />
  );
};

const styles = StyleSheet.create({
  analyzeIcon: {
    position: "relative",
    width: 48,
    height: 48,
  },
});

export default AnalyzeIcon;
