import * as React from "react";
import { StyleProp, ViewStyle, Image, StyleSheet } from "react-native";

type ProfileIconType = {
  style?: StyleProp<ViewStyle>;
};

const ProfileIcon = ({ style }: ProfileIconType) => {
  return (
    <Image
      style={[styles.profileIcon, style]}
      resizeMode="cover"
      source={require("../assets/profile.png")}
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

export default ProfileIcon;
