import * as React from "react";
import {
  ScrollView,
  StatusBar,
  Image,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
} from "react-native";

const Profile = () => {
  return (
    <ScrollView
      style={styles.profileScrollView}
      contentContainerStyle={styles.profileScrollViewContent}
    >
      <Image
        barStyle="default"
        resizeMode="cover"
        source={require("../assets/iosstatus-barwhite.png")}
      />
      <View style={styles.pageHeaderView}>
        <Text style={styles.logoutText}>Logout</Text>
        <Text style={styles.profileText}>Profile</Text>
        <Image
          style={styles.iconX}
          resizeMode="cover"
          source={require("../assets/iconx.png")}
        />
        <Text style={styles.settingsText}>Settings</Text>
      </View>
      <Image
        style={styles.ellipseIcon}
        resizeMode="cover"
        source={require("../assets/ellipse-6.png")}
      />
      <View style={styles.nameBio}>
        <Text style={styles.userNameText}>Victoria Robertson</Text>
        <Text style={styles.bioText}>A mantra goes here</Text>
      </View>
      <View style={styles.profileInfoView}>
        <View style={styles.postContainerView} />
        <TouchableOpacity
          style={styles.medicalHistoryTouchableOpacity}
          activeOpacity={0.2}
          onPress={() => {}}
        >
          <Text style={styles.medicalHistoryText}>Medical History</Text>
        </TouchableOpacity>
        <View style={styles.visionView}>
          <Text style={styles.xXXXText}>XX/XX</Text>
          <Text style={styles.visionText}>Vision</Text>
        </View>
        <View style={styles.bloodGroupView}>
          <Text style={styles.xXText}>XX?</Text>
          <Text style={styles.bloodGroupText}>Blood Group</Text>
        </View>
        <View style={styles.weightView}>
          <Text style={styles.xxKgText}>xx kg</Text>
          <Text style={styles.weightKgText}>Weight (kg)</Text>
        </View>
        <View style={styles.heightView}>
          <Text style={styles.xxxCmText}>xxx cm</Text>
          <Text style={styles.heightCmText}>Height (cm)</Text>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  profileScrollViewContent: {
    alignItems: "center",
    justifyContent: "flex-start",
    flexDirection: "column",
    paddingHorizontal: 0,
    paddingBottom: 238,
  },
  logoutText: {
    position: "absolute",
    top: 8,
    right: 0,
    fontSize: 16,
    fontWeight: "600",
    fontFamily: "Inter",
    color: "#fff",
    textAlign: "right",
  },
  profileText: {
    position: "absolute",
    transform: [
      {
        translateX: -50.5,
      },
    ],
    top: 0,
    left: "50%",
    fontSize: 32,
    fontWeight: "700",
    fontFamily: "Comfortaa",
    color: "#fff",
    textAlign: "center",
  },
  iconX: {
    position: "absolute",
    top: 16,
    left: -0.31,
    width: 16,
    height: 16,
    display: "none",
  },
  settingsText: {
    position: "absolute",
    transform: [
      {
        translateY: -10,
      },
    ],
    top: "50%",
    left: 0,
    fontSize: 16,
    fontWeight: "600",
    fontFamily: "Inter",
    color: "#fff",
    textAlign: "left",
  },
  pageHeaderView: {
    position: "relative",
    width: 343,
    height: 36,
    flexShrink: 0,
  },
  ellipseIcon: {
    position: "relative",
    width: 198,
    height: 198,
    flexShrink: 0,
  },
  userNameText: {
    position: "absolute",
    top: 0,
    left: 0,
    fontSize: 32,
    fontWeight: "700",
    fontFamily: "Comfortaa",
    color: "#000",
    textAlign: "center",
  },
  bioText: {
    position: "absolute",
    top: 44,
    left: 87,
    fontSize: 15,
    fontWeight: "600",
    fontFamily: "Inter",
    color: "#000",
    textAlign: "center",
  },
  nameBio: {
    position: "relative",
    width: 317,
    height: 62,
    flexShrink: 0,
  },
  postContainerView: {
    position: "absolute",
    top: 0,
    left: 0,
    width: 348,
    height: 348,
  },
  medicalHistoryText: {
    fontSize: 16,
    textDecoration: "underline",
    fontWeight: "700",
    fontFamily: "Comfortaa",
    color: "#6e7aea",
    textAlign: "left",
    display: "flex",
    alignItems: "center",
    width: 139,
    height: 33.48,
  },
  medicalHistoryTouchableOpacity: {
    position: "absolute",
    left: 15,
    top: 201,
  },
  xXXXText: {
    position: "absolute",
    top: 0,
    left: 206.15,
    fontSize: 16,
    fontWeight: "700",
    fontFamily: "Comfortaa",
    color: "#666",
    textAlign: "left",
    display: "flex",
    alignItems: "center",
    width: 110.85,
    height: 33.48,
  },
  visionText: {
    position: "absolute",
    top: 0,
    left: 0,
    fontSize: 16,
    fontWeight: "700",
    fontFamily: "Comfortaa",
    color: "#666",
    textAlign: "left",
    display: "flex",
    alignItems: "center",
    width: 110.85,
    height: 33.48,
  },
  visionView: {
    position: "absolute",
    top: 156,
    left: 15,
    width: 317,
    height: 33.48,
  },
  xXText: {
    position: "absolute",
    top: 0,
    left: 206.15,
    fontSize: 16,
    fontWeight: "700",
    fontFamily: "Comfortaa",
    color: "#666",
    textAlign: "left",
    display: "flex",
    alignItems: "center",
    width: 110.85,
    height: 33.48,
  },
  bloodGroupText: {
    position: "absolute",
    top: 0,
    left: 0,
    fontSize: 16,
    fontWeight: "700",
    fontFamily: "Comfortaa",
    color: "#666",
    textAlign: "left",
    display: "flex",
    alignItems: "center",
    width: 110.85,
    height: 33.48,
  },
  bloodGroupView: {
    position: "absolute",
    top: 111,
    left: 15,
    width: 317,
    height: 33.48,
  },
  xxKgText: {
    position: "absolute",
    top: 0,
    left: 205.42,
    fontSize: 16,
    fontWeight: "700",
    fontFamily: "Comfortaa",
    color: "#666",
    textAlign: "left",
    display: "flex",
    alignItems: "center",
    width: 111.58,
    height: 29.76,
  },
  weightKgText: {
    position: "absolute",
    top: 3.72,
    left: 0,
    fontSize: 16,
    fontWeight: "700",
    fontFamily: "Comfortaa",
    color: "#666",
    textAlign: "left",
    display: "flex",
    alignItems: "center",
    width: 111.58,
    height: 29.76,
  },
  weightView: {
    position: "absolute",
    top: 66,
    left: 15,
    width: 317,
    height: 33.48,
  },
  xxxCmText: {
    position: "absolute",
    top: 0,
    left: 206.15,
    fontSize: 16,
    fontWeight: "700",
    fontFamily: "Comfortaa",
    color: "#666",
    textAlign: "left",
    display: "flex",
    alignItems: "center",
    width: 110.85,
    height: 33.48,
  },
  heightCmText: {
    position: "absolute",
    top: 0,
    left: 0,
    fontSize: 16,
    fontWeight: "700",
    fontFamily: "Comfortaa",
    color: "#666",
    textAlign: "left",
    display: "flex",
    alignItems: "center",
    width: 110.85,
    height: 33.48,
  },
  heightView: {
    position: "absolute",
    top: 20.52,
    left: 15,
    width: 317,
    height: 33.48,
  },
  profileInfoView: {
    position: "relative",
    width: 348,
    height: 348,
    flexShrink: 0,
  },
  profileScrollView: {
    position: "relative",
    backgroundColor: "#fff",
    flex: 1,
    width: "100%",
    boxSizing: "border-box",
  },
});

export default Profile;
