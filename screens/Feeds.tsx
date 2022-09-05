import * as React from "react";
import {
  ScrollView,
  StatusBar,
  Image,
  StyleSheet,
  Text,
  View,
  TextInput,
} from "react-native";

const Feeds = () => {
  return (
    <ScrollView
      style={styles.feedsScrollView}
      contentContainerStyle={styles.feedsScrollViewContent}
    >
      <Image
        barStyle="default"
        resizeMode="cover"
        source={require("../assets/iosstatus-barblack.png")}
      />
      <View style={[styles.pageHeaderView, styles.mt21]}>
        <Text style={styles.filterText}>Filter</Text>
        <Text style={styles.contentText}>Feeds</Text>
        <Image
          style={styles.iconX}
          resizeMode="cover"
          source={require("../assets/iconx.png")}
        />
        <Text style={styles.backText}>Back</Text>
      </View>
      <TextInput
        style={[styles.inputSearchTextInput, styles.mt21]}
        placeholder="Search"
        keyboardType="default"
        placeholderTextColor="#bdbdbd"
      />
      <View style={[styles.contentBlocksView, styles.mt21]}>
        <View style={styles.contentContentBlockLargeView}>
          <View style={styles.contentBlockView} />
          <Text style={[styles.headerText, styles.mt8]}>Header</Text>
          <View style={[styles.textTime, styles.mt8]}>
            <Text style={styles.hellWantToUseYourYacht}>
              He'll want to use your yacht, and I don't want this thing smelling
              like fish.
            </Text>
            <Text style={[styles.mAgoText, styles.mt8]}>8m ago</Text>
            <Image
              style={[styles.paginationIcon, styles.mt8]}
              resizeMode="cover"
              source={require("../assets/pagination.png")}
            />
          </View>
        </View>
        <View style={[styles.contentContentBlockLargeView1, styles.mt16]}>
          <View style={styles.contentBlockView1} />
          <Text style={[styles.headerText1, styles.mt8]}>Header</Text>
          <View style={[styles.textTime1, styles.mt8]}>
            <Text style={styles.hellWantToUseYourYacht1}>
              He'll want to use your yacht, and I don't want this thing smelling
              like fish.
            </Text>
            <Text style={[styles.mAgoText1, styles.mt8]}>8m ago</Text>
            <Image
              style={[styles.paginationIcon1, styles.mt8]}
              resizeMode="cover"
              source={require("../assets/pagination1.png")}
            />
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  mt8: {
    marginTop: 8,
  },
  mt16: {
    marginTop: 16,
  },
  mt21: {
    marginTop: 21,
  },
  feedsScrollViewContent: {
    alignItems: "center",
    justifyContent: "flex-start",
    flexDirection: "column",
  },
  filterText: {
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
  contentText: {
    position: "absolute",
    transform: [
      {
        translateX: -47.5,
      },
    ],
    top: 0,
    left: "50%",
    fontSize: 32,
    fontWeight: "700",
    fontFamily: "Comfortaa",
    color: "#000",
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
    width: 343,
    height: 36,
    flexShrink: 0,
  },
  inputSearchTextInput: {
    position: "relative",
    backgroundColor: "#e8e8e8",
    width: 343,
    height: 50,
    flexShrink: 0,
  },
  contentBlockView: {
    alignSelf: "stretch",
    position: "relative",
    borderRadius: 8,
    backgroundColor: "#f6f6f6",
    height: 240,
    flexShrink: 0,
  },
  headerText: {
    position: "relative",
    fontSize: 15,
    fontWeight: "600",
    fontFamily: "Inter",
    color: "#000",
    textAlign: "left",
  },
  hellWantToUseYourYacht: {
    alignSelf: "stretch",
    position: "relative",
    fontSize: 14,
    fontFamily: "Inter",
    color: "#000",
    textAlign: "left",
  },
  mAgoText: {
    position: "relative",
    fontSize: 14,
    fontFamily: "Inter",
    color: "#bdbdbd",
    textAlign: "right",
  },
  paginationIcon: {
    position: "relative",
    width: 40,
    height: 8,
    flexShrink: 0,
  },
  textTime: {
    alignSelf: "stretch",
    overflow: "hidden",
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
  contentContentBlockLargeView: {
    width: 343,
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
  contentBlockView1: {
    alignSelf: "stretch",
    position: "relative",
    borderRadius: 8,
    backgroundColor: "#f6f6f6",
    height: 240,
    flexShrink: 0,
  },
  headerText1: {
    position: "relative",
    fontSize: 15,
    fontWeight: "600",
    fontFamily: "Inter",
    color: "#000",
    textAlign: "left",
  },
  hellWantToUseYourYacht1: {
    alignSelf: "stretch",
    position: "relative",
    fontSize: 14,
    fontFamily: "Inter",
    color: "#000",
    textAlign: "left",
  },
  mAgoText1: {
    position: "relative",
    fontSize: 14,
    fontFamily: "Inter",
    color: "#bdbdbd",
    textAlign: "right",
  },
  paginationIcon1: {
    position: "relative",
    width: 40,
    height: 8,
    flexShrink: 0,
  },
  textTime1: {
    alignSelf: "stretch",
    overflow: "hidden",
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
  contentContentBlockLargeView1: {
    width: 343,
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
  contentBlocksView: {
    height: 695,
    flexShrink: 0,
    overflow: "hidden",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "flex-start",
  },
  feedsScrollView: {
    position: "relative",
    backgroundColor: "#fff",
    flex: 1,
    width: "100%",
  },
});

export default Feeds;
