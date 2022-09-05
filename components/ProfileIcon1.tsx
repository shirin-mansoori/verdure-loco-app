import * as React from "react";
import { StyleProp, ViewStyle, Image, StyleSheet } from "react-native";

type ProfileIcon1Type = {
  style?: StyleProp<ViewStyle>;
};

const ProfileIcon1 = ({ style }: ProfileIcon1Type) => {
  return (
    <Image
      style={[styles.profileIcon, style]}
      resizeMode="cover"
      source={require("../assets/profile1.png")}
    />
  );
};

const styles = StyleSheet.create({
  profileIcon: {
    position: "relative",
    width: 48,
    height: 48,
  },
});

export default ProfileIcon1;
