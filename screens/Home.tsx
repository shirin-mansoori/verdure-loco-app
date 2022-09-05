import * as React from "react";
import {
  ScrollView,
  StatusBar,
  Image,
  StyleSheet,
  Text,
  View,
  ImageBackground,
} from "react-native";

const Home = () => {
  return (
    <ScrollView
      style={styles.homeScrollView}
      contentContainerStyle={styles.homeScrollViewContent}
    >
      <Image
        barStyle="default"
        resizeMode="cover"
        source={require("../assets/iosstatus-barblack.png")}
      />
      <View style={[styles.pageHeaderView, styles.mt25]}>
        <Text style={styles.nextText}>Next</Text>
        <Text style={styles.verdureText}>verdure</Text>
        <Image
          style={styles.iconX}
          resizeMode="cover"
          source={require("../assets/iconx.png")}
        />
        <Text style={styles.backText}>Back</Text>
      </View>
      <ScrollView
        style={[styles.frameScrollView, styles.mt25]}
        contentContainerStyle={styles.frameScrollViewContent}
      >
        <View style={styles.homebodyView}>
          <View style={styles.workoutView}>
            <Text style={styles.todaysWorkoutText} numberOfLines={1}>
              Today’s Workout
            </Text>
            <View style={[styles.workoutlistsView, styles.mt11]}>
              <View style={styles.workout1View}>
                <ImageBackground
                  style={styles.rectangleIcon}
                  resizeMode="cover"
                  source={require("../assets/rectangle.png")}
                />
                <Text
                  style={[styles.workout1NameText, styles.ml19]}
                  numberOfLines={1}
                >
                  Jumping Jacks
                </Text>
                <Text
                  style={[styles.workout1RepText, styles.ml19]}
                  numberOfLines={1}
                >
                  x200
                </Text>
              </View>
              <View style={[styles.workout2View, styles.mt18]}>
                <ImageBackground
                  style={styles.rectangleIcon1}
                  resizeMode="cover"
                  source={require("../assets/rectangle1.png")}
                />
                <Text
                  style={[styles.workout2NameText, styles.ml19]}
                  numberOfLines={1}
                >
                  Push Ups
                </Text>
                <Text
                  style={[styles.workout2RepText, styles.ml19]}
                  numberOfLines={1}
                >
                  x100
                </Text>
              </View>
              <View style={[styles.workout3View, styles.mt18]}>
                <ImageBackground
                  style={styles.rectangleIcon2}
                  resizeMode="cover"
                  source={require("../assets/rectangle2.png")}
                />
                <Text
                  style={[styles.workout3NameText, styles.ml19]}
                  numberOfLines={1}
                >
                  Skipping
                </Text>
                <Text
                  style={[styles.workout3RepText, styles.ml19]}
                  numberOfLines={1}
                >
                  x200
                </Text>
              </View>
              <View style={[styles.workout4View, styles.mt18]}>
                <ImageBackground
                  style={styles.rectangleIcon3}
                  resizeMode="cover"
                  source={require("../assets/rectangle3.png")}
                />
                <Text
                  style={[styles.workout4NameText, styles.ml19]}
                  numberOfLines={1}
                >
                  Crunches
                </Text>
                <Text
                  style={[styles.workout4RepText, styles.ml19]}
                  numberOfLines={1}
                >
                  x60
                </Text>
              </View>
              <View style={[styles.workout5View, styles.mt18]}>
                <ImageBackground
                  style={styles.rectangleIcon4}
                  resizeMode="cover"
                  source={require("../assets/rectangle4.png")}
                />
                <Text
                  style={[styles.workout5NameText, styles.ml19]}
                  numberOfLines={1}
                >
                  Stretching
                </Text>
                <Text
                  style={[styles.workout5RepText, styles.ml19]}
                  numberOfLines={1}
                >
                  10min
                </Text>
              </View>
              <View style={[styles.workout6View, styles.mt18]}>
                <ImageBackground
                  style={styles.rectangleIcon5}
                  resizeMode="cover"
                  source={require("../assets/rectangle5.png")}
                />
                <Text
                  style={[styles.workout6NameText, styles.ml19]}
                  numberOfLines={1}
                >
                  Padmasana
                </Text>
                <Text
                  style={[styles.workout6RepText, styles.ml19]}
                  numberOfLines={1}
                >
                  10min
                </Text>
              </View>
            </View>
          </View>
          <View style={styles.homeinfoView}>
            <Image
              style={styles.iconFire}
              resizeMode="cover"
              source={require("../assets/-icon-fire.png")}
            />
            <Text style={styles.kcalText} numberOfLines={1}>
              100 Kcal
            </Text>
            <Text style={styles.stepsText} numberOfLines={1}>
              100 steps
            </Text>
            <Image
              style={styles.footstepsIcon81}
              resizeMode="cover"
              source={require("../assets/footstepsicon8-1.png")}
            />
            <View style={styles.lineView} />
          </View>
        </View>
      </ScrollView>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  ml19: {
    marginLeft: 19,
  },
  mt18: {
    marginTop: 18,
  },
  mt11: {
    marginTop: 11,
  },
  frameScrollViewContent: {
    alignItems: "center",
    justifyContent: "flex-start",
    flexDirection: "column",
    paddingHorizontal: 8,
    paddingVertical: 2,
  },
  mt25: {
    marginTop: 25,
  },
  homeScrollViewContent: {
    alignItems: "center",
    justifyContent: "flex-start",
    flexDirection: "column",
  },
  nextText: {
    position: "absolute",
    top: 8,
    right: 0,
    fontSize: 16,
    fontWeight: "600",
    fontFamily: "Inter",
    color: "#5db075",
    textAlign: "right",
    display: "none",
  },
  verdureText: {
    position: "absolute",
    transform: [
      {
        translateX: -63.5,
      },
    ],
    top: 0,
    left: "50%",
    fontSize: 32,
    fontWeight: "700",
    fontFamily: "Comfortaa",
    color: "#5db075",
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
  backText: {
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
    color: "#5db075",
    textAlign: "left",
    display: "none",
  },
  pageHeaderView: {
    position: "relative",
    backgroundColor: "rgba(255, 255, 255, 0)",
    width: 343,
    height: 36,
    flexShrink: 0,
  },
  todaysWorkoutText: {
    position: "relative",
    fontSize: 24,
    fontWeight: "600",
    fontFamily: "Inter",
    color: "#666",
    textAlign: "left",
    width: 336,
    height: 30,
  },
  rectangleIcon: {
    position: "relative",
    width: 105,
    height: 105,
    flexShrink: 0,
  },
  workout1NameText: {
    position: "relative",
    fontSize: 16,
    fontWeight: "500",
    fontFamily: "Inter",
    color: "#000",
    textAlign: "left",
    display: "flex",
    alignItems: "center",
    width: 127,
    height: 35,
  },
  workout1RepText: {
    position: "relative",
    fontSize: 16,
    fontWeight: "500",
    fontFamily: "Inter",
    color: "#000",
    textAlign: "left",
    display: "flex",
    alignItems: "center",
    width: 55,
    height: 35,
  },
  workout1View: {
    backgroundColor: "#e8e8e8",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
  },
  rectangleIcon1: {
    position: "relative",
    width: 105,
    height: 105,
    flexShrink: 0,
  },
  workout2NameText: {
    position: "relative",
    fontSize: 16,
    fontWeight: "500",
    fontFamily: "Inter",
    color: "#000",
    textAlign: "left",
    display: "flex",
    alignItems: "center",
    width: 127,
    height: 35,
  },
  workout2RepText: {
    position: "relative",
    fontSize: 16,
    fontWeight: "500",
    fontFamily: "Inter",
    color: "#000",
    textAlign: "left",
    display: "flex",
    alignItems: "center",
    width: 55,
    height: 35,
  },
  workout2View: {
    backgroundColor: "#e8e8e8",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
  },
  rectangleIcon2: {
    position: "relative",
    width: 105,
    height: 105,
    flexShrink: 0,
  },
  workout3NameText: {
    position: "relative",
    fontSize: 16,
    fontWeight: "500",
    fontFamily: "Inter",
    color: "#000",
    textAlign: "left",
    display: "flex",
    alignItems: "center",
    width: 127,
    height: 35,
  },
  workout3RepText: {
    position: "relative",
    fontSize: 16,
    fontWeight: "500",
    fontFamily: "Inter",
    color: "#000",
    textAlign: "left",
    display: "flex",
    alignItems: "center",
    width: 55,
    height: 35,
  },
  workout3View: {
    backgroundColor: "#e8e8e8",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
  },
  rectangleIcon3: {
    position: "relative",
    width: 105,
    height: 105,
    flexShrink: 0,
  },
  workout4NameText: {
    position: "relative",
    fontSize: 16,
    fontWeight: "500",
    fontFamily: "Inter",
    color: "#000",
    textAlign: "left",
    display: "flex",
    alignItems: "center",
    width: 127,
    height: 35,
  },
  workout4RepText: {
    position: "relative",
    fontSize: 16,
    fontWeight: "500",
    fontFamily: "Inter",
    color: "#000",
    textAlign: "left",
    display: "flex",
    alignItems: "center",
    width: 55,
    height: 35,
  },
  workout4View: {
    backgroundColor: "#e8e8e8",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
  },
  rectangleIcon4: {
    position: "relative",
    width: 105,
    height: 105,
    flexShrink: 0,
  },
  workout5NameText: {
    position: "relative",
    fontSize: 16,
    fontWeight: "500",
    fontFamily: "Inter",
    color: "#000",
    textAlign: "left",
    display: "flex",
    alignItems: "center",
    width: 127,
    height: 35,
  },
  workout5RepText: {
    position: "relative",
    fontSize: 16,
    fontWeight: "500",
    fontFamily: "Inter",
    color: "#000",
    textAlign: "left",
    display: "flex",
    alignItems: "center",
    width: 55,
    height: 35,
  },
  workout5View: {
    backgroundColor: "#e8e8e8",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
  },
  rectangleIcon5: {
    position: "relative",
    width: 105,
    height: 105,
    flexShrink: 0,
  },
  workout6NameText: {
    position: "relative",
    fontSize: 16,
    fontWeight: "500",
    fontFamily: "Inter",
    color: "#000",
    textAlign: "left",
    display: "flex",
    alignItems: "center",
    width: 127,
    height: 35,
  },
  workout6RepText: {
    position: "relative",
    fontSize: 16,
    fontWeight: "500",
    fontFamily: "Inter",
    color: "#000",
    textAlign: "left",
    display: "flex",
    alignItems: "center",
    width: 55,
    height: 35,
  },
  workout6View: {
    backgroundColor: "#e8e8e8",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
  },
  workoutlistsView: {
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
  workoutView: {
    position: "absolute",
    top: 171,
    left: 0,
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
  iconFire: {
    position: "absolute",
    height: "69.01%",
    width: "24.46%",
    top: "10.56%",
    right: "70.34%",
    bottom: "20.42%",
    left: "5.2%",
    maxWidth: "100%",
    maxHeight: "100%",
  },
  kcalText: {
    position: "absolute",
    top: 114,
    left: 0,
    fontSize: 14,
    fontWeight: "600",
    fontFamily: "Inter",
    color: "#000",
    textAlign: "center",
    display: "flex",
    alignItems: "flex-end",
    justifyContent: "center",
    width: 115,
    height: 28,
  },
  stepsText: {
    position: "absolute",
    top: 117,
    left: 217,
    fontSize: 14,
    fontWeight: "600",
    fontFamily: "Inter",
    color: "#000",
    textAlign: "center",
    display: "flex",
    alignItems: "flex-end",
    justifyContent: "center",
    width: 110,
    height: 25,
  },
  footstepsIcon81: {
    position: "absolute",
    top: 15,
    left: 226,
    width: 87,
    height: 98,
  },
  lineView: {
    position: "absolute",
    top: -3,
    left: 165,
    borderStyle: "solid",
    borderColor: "#666",
    borderRightWidth: 6,
    width: 6,
    height: 148,
  },
  homeinfoView: {
    position: "absolute",
    height: "15.24%",
    width: "97.32%",
    top: "0%",
    right: "2.68%",
    bottom: "84.76%",
    left: "0%",
  },
  homebodyView: {
    position: "relative",
    width: 336,
    height: 932,
    flexShrink: 0,
  },
  frameScrollView: {
    boxSizing: "border-box",
    flex: 1,
  },
  homeScrollView: {
    position: "relative",
    backgroundColor: "#fff",
    flex: 1,
    width: "100%",
  },
});

export default Home;
