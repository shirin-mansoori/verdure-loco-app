import * as React from "react";
import { Text, StyleSheet, ImageBackground } from "react-native";

const SplashScreenIcon = () => {
  return (
    <ImageBackground
      style={styles.splashScreenIcon}
      resizeMode="cover"
      source={require("../assets/splashscreen.png")}
    >
      <Text style={styles.verdureText}>Verdure</Text>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  verdureText: {
    position: "relative",
    fontSize: 32,
    fontWeight: "700",
    fontFamily: "Comfortaa",
    color: "#496c42",
    textAlign: "center",
    textShadowColor: "rgba(0, 0, 0, 0.25)",
    textShadowOffset: {
      width: 0,
      height: 4,
    },
    textShadowRadius: 4,
  },
  splashScreenIcon: {
    position: "relative",
    flex: 1,
    width: "100%",
    flexDirection: "column",
    paddingHorizontal: 71,
    paddingVertical: 345,
    boxSizing: "border-box",
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
});

export default SplashScreenIcon;
