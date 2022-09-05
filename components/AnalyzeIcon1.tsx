import * as React from "react";
import { StyleProp, ViewStyle, Image, StyleSheet } from "react-native";

type AnalyzeIcon1Type = {
  style?: StyleProp<ViewStyle>;
};

const AnalyzeIcon1 = ({ style }: AnalyzeIcon1Type) => {
  return (
    <Image
      style={[styles.analyzeIcon, style]}
      resizeMode="cover"
      source={require("../assets/analyze1.png")}
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

export default AnalyzeIcon1;
