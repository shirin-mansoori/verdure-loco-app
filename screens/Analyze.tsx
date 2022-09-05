import * as React from "react";
import {
  ScrollView,
  StatusBar,
  Image,
  StyleSheet,
  Text,
  View,
} from "react-native";

const Analyze = () => {
  return (
    <ScrollView
      style={styles.analyzeScrollView}
      contentContainerStyle={styles.analyzeScrollViewContent}
    >
      <Image
        barStyle="default"
        resizeMode="cover"
        source={require("../assets/iosstatus-barblack1.png")}
      />
      <View style={[styles.pageHeaderView, styles.mt101]}>
        <Text style={styles.newText}>New</Text>
        <Text style={styles.expensesText}>Analyze</Text>
        <Image
          style={styles.iconX}
          resizeMode="cover"
          source={require("../assets/iconx1.png")}
        />
        <Text style={styles.backText}>Back</Text>
      </View>
      <ScrollView
        style={[styles.frameScrollView, styles.mt101]}
        horizontal
        pagingEnabled={false}
        contentContainerStyle={styles.frameScrollViewContent}
      >
        <View style={styles.dataMobileGraphView}>
          <Image
            style={styles.backgroundIcon}
            resizeMode="cover"
            source={require("../assets/background.png")}
          />
          <View style={styles.barsView}>
            <View style={styles.barLineView}>
              <View style={styles.dataBarChartBackgroundView}>
                <Image
                  style={styles.backgroundIcon1}
                  resizeMode="cover"
                  source={require("../assets/background1.png")}
                />
                <Text style={styles.itemText}>Sunday</Text>
              </View>
              <View style={styles.dataBarChartFillView}>
                <View style={styles.backgroundView} />
              </View>
            </View>
            <View style={styles.barLineView1}>
              <View style={styles.dataBarChartBackgroundView1}>
                <Image
                  style={styles.backgroundIcon2}
                  resizeMode="cover"
                  source={require("../assets/background1.png")}
                />
                <Text style={styles.itemText1}>Monday</Text>
              </View>
              <View style={styles.dataBarChartFillView1}>
                <View style={styles.backgroundView1} />
              </View>
            </View>
            <View style={styles.barLineView2}>
              <View style={styles.dataBarChartBackgroundView2}>
                <Image
                  style={styles.backgroundIcon3}
                  resizeMode="cover"
                  source={require("../assets/background1.png")}
                />
                <Text style={styles.itemText2}>Tuesday</Text>
              </View>
              <View style={styles.dataBarChartFillView2}>
                <View style={styles.backgroundView2} />
              </View>
            </View>
            <View style={styles.barLineView3}>
              <View style={styles.dataBarChartBackgroundView3}>
                <Image
                  style={styles.backgroundIcon4}
                  resizeMode="cover"
                  source={require("../assets/background1.png")}
                />
                <Text style={styles.itemText3}>Wednesday</Text>
              </View>
              <View style={styles.dataBarChartFillView3}>
                <View style={styles.backgroundView3} />
              </View>
            </View>
            <View style={styles.barLineView4}>
              <View style={styles.dataBarChartBackgroundView4}>
                <Image
                  style={styles.backgroundIcon5}
                  resizeMode="cover"
                  source={require("../assets/background1.png")}
                />
                <Text style={styles.itemText4}>Thursday</Text>
              </View>
              <View style={styles.dataBarChartFillView4}>
                <View style={styles.backgroundView4} />
              </View>
            </View>
            <View style={styles.barLineView5}>
              <View style={styles.dataBarChartBackgroundView5}>
                <Image
                  style={styles.backgroundIcon6}
                  resizeMode="cover"
                  source={require("../assets/background1.png")}
                />
                <Text style={styles.itemText5}>Friday</Text>
              </View>
              <View style={styles.dataBarChartFillView5}>
                <View style={styles.backgroundView5} />
              </View>
            </View>
            <View style={styles.barLineView6}>
              <View style={styles.dataBarChartBackgroundView6}>
                <Image
                  style={styles.backgroundIcon7}
                  resizeMode="cover"
                  source={require("../assets/background1.png")}
                />
                <Text style={styles.itemText6}>Saturday</Text>
              </View>
              <View style={styles.dataBarChartFillView6}>
                <View style={styles.backgroundView6} />
              </View>
            </View>
          </View>
        </View>
        <View style={[styles.circularGraphView, styles.ml50]}>
          <Image
            style={styles.innerCircleIcon}
            resizeMode="cover"
            source={require("../assets/inner-circle.png")}
          />
          <Text style={styles.sleeptimeText}>7h18min</Text>
          <Text style={styles.sleepText}>Sleep</Text>
          <Image
            style={styles.outerCircleIcon}
            resizeMode="cover"
            source={require("../assets/outer-circle.png")}
          />
        </View>
      </ScrollView>
      <View style={[styles.dataListView, styles.mt101]}>
        <Text style={styles.statsText}>Statistics</Text>
        <View style={styles.dataGraphResultView}>
          <Text style={styles.itemText7}>Item</Text>
          <Text style={styles.statisticText}>Statistic</Text>
          <View style={styles.dividerView} />
          <Image
            style={styles.icon}
            resizeMode="cover"
            source={require("../assets/icon.png")}
          />
        </View>
        <View style={styles.dataGraphResultView1}>
          <Text style={styles.itemText8}>Item</Text>
          <Text style={styles.statisticText1}>Statistic</Text>
          <View style={styles.dividerView1} />
          <Image
            style={styles.icon1}
            resizeMode="cover"
            source={require("../assets/icon1.png")}
          />
        </View>
        <View style={styles.dataGraphResultView2}>
          <Text style={styles.itemText9}>Item</Text>
          <Text style={styles.statisticText2}>Statistic</Text>
          <View style={styles.dividerView2} />
          <Image
            style={styles.icon2}
            resizeMode="cover"
            source={require("../assets/icon.png")}
          />
        </View>
        <View style={styles.dataGraphResultView3}>
          <Text style={styles.itemText10}>Item</Text>
          <Text style={styles.statisticText3}>Statistic</Text>
          <View style={styles.dividerView3} />
          <Image
            style={styles.icon3}
            resizeMode="cover"
            source={require("../assets/icon1.png")}
          />
        </View>
        <View style={styles.dataGraphResultView4}>
          <Text style={styles.itemText11}>Item</Text>
          <Text style={styles.statisticText4}>Statistic</Text>
          <View style={styles.dividerView4} />
          <Image
            style={styles.icon4}
            resizeMode="cover"
            source={require("../assets/icon.png")}
          />
        </View>
        <View style={styles.dataGraphResultView5}>
          <Text style={styles.itemText12}>Item</Text>
          <Text style={styles.statisticText5}>Statistic</Text>
          <View style={styles.dividerView5} />
          <Image
            style={styles.icon5}
            resizeMode="cover"
            source={require("../assets/icon1.png")}
          />
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  ml50: {
    marginLeft: 50,
  },
  frameScrollViewContent: {
    alignItems: "center",
    justifyContent: "flex-start",
    flexDirection: "row",
    paddingHorizontal: 20,
    paddingVertical: 0,
  },
  mt101: {
    marginTop: 101,
  },
  analyzeScrollViewContent: {
    alignItems: "center",
    justifyContent: "flex-start",
    flexDirection: "column",
  },
  newText: {
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
  expensesText: {
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
  backgroundIcon: {
    position: "absolute",
    height: "100.43%",
    width: "100%",
    top: "0%",
    right: "0%",
    bottom: "-0.43%",
    left: "0%",
    borderRadius: 20,
    maxWidth: "100%",
    maxHeight: "100%",
  },
  backgroundIcon1: {
    position: "absolute",
    transform: [
      {
        translateX: -1,
      },
    ],
    top: 0,
    bottom: 43,
    left: "50%",
    borderRadius: 200,
    maxHeight: "100%",
    width: 16,
  },
  itemText: {
    position: "absolute",
    transform: [
      {
        translateX: -18.39,
      },
      {
        rotate: "-45deg",
      },
    ],
    bottom: -2.46,
    left: "50%",
    fontSize: 10,
    fontFamily: "Inter",
    color: "#666",
    textAlign: "right",
  },
  dataBarChartBackgroundView: {
    position: "absolute",
    top: 0,
    left: 0,
    width: 30,
    height: 202,
  },
  backgroundView: {
    position: "absolute",
    width: "100%",
    top: 0,
    right: "0%",
    bottom: 0,
    left: "0%",
    borderRadius: 8,
    backgroundColor: "#6e7aea",
  },
  dataBarChartFillView: {
    position: "absolute",
    top: 49,
    left: 14,
    width: 16,
    height: 117,
  },
  barLineView: {
    position: "absolute",
    top: 0,
    left: 0,
    width: 30,
    height: 202,
  },
  backgroundIcon2: {
    position: "absolute",
    transform: [
      {
        translateX: -1,
      },
    ],
    top: 0,
    bottom: 43,
    left: "50%",
    borderRadius: 200,
    maxHeight: "100%",
    width: 16,
  },
  itemText1: {
    position: "absolute",
    transform: [
      {
        translateX: -19.81,
      },
      {
        rotate: "-45deg",
      },
    ],
    bottom: -3.87,
    left: "50%",
    fontSize: 10,
    fontFamily: "Inter",
    color: "#666",
    textAlign: "right",
  },
  dataBarChartBackgroundView1: {
    position: "absolute",
    top: 0,
    left: 0,
    width: 30,
    height: 202,
  },
  backgroundView1: {
    position: "absolute",
    width: "100%",
    top: 0,
    right: "0%",
    bottom: 0,
    left: "0%",
    borderRadius: 8,
    backgroundColor: "#4b9460",
  },
  dataBarChartFillView1: {
    position: "absolute",
    top: 89,
    left: 14,
    width: 16,
    height: 77,
  },
  barLineView1: {
    position: "absolute",
    top: 0,
    left: 40,
    width: 30,
    height: 202,
  },
  backgroundIcon3: {
    position: "absolute",
    transform: [
      {
        translateX: -1,
      },
    ],
    top: 0,
    bottom: 43,
    left: "50%",
    borderRadius: 200,
    maxHeight: "100%",
    width: 16,
  },
  itemText2: {
    position: "absolute",
    transform: [
      {
        translateX: -21.22,
      },
      {
        rotate: "-45deg",
      },
    ],
    bottom: -5.28,
    left: "50%",
    fontSize: 10,
    fontFamily: "Inter",
    color: "#666",
    textAlign: "right",
  },
  dataBarChartBackgroundView2: {
    position: "absolute",
    top: 0,
    left: 0,
    width: 30,
    height: 202,
  },
  backgroundView2: {
    position: "absolute",
    width: "100%",
    top: 0,
    right: "0%",
    bottom: 0,
    left: "0%",
    borderRadius: 8,
    backgroundColor: "#6e7aea",
  },
  dataBarChartFillView2: {
    position: "absolute",
    top: 49,
    left: 14,
    width: 16,
    height: 117,
  },
  barLineView2: {
    position: "absolute",
    top: 0,
    left: 80,
    width: 30,
    height: 202,
  },
  backgroundIcon4: {
    position: "absolute",
    transform: [
      {
        translateX: -1,
      },
    ],
    top: 0,
    bottom: 43,
    left: "50%",
    borderRadius: 200,
    maxHeight: "100%",
    width: 16,
  },
  itemText3: {
    position: "absolute",
    transform: [
      {
        translateX: -32.54,
      },
      {
        rotate: "-45deg",
      },
    ],
    bottom: -16.6,
    left: "50%",
    fontSize: 10,
    fontFamily: "Inter",
    color: "#666",
    textAlign: "right",
  },
  dataBarChartBackgroundView3: {
    position: "absolute",
    top: 0,
    left: 0,
    width: 30,
    height: 202,
  },
  backgroundView3: {
    position: "absolute",
    width: "100%",
    top: 0,
    right: "0%",
    bottom: 0,
    left: "0%",
    borderRadius: 8,
    backgroundColor: "#4b9460",
  },
  dataBarChartFillView3: {
    position: "absolute",
    top: 89,
    left: 14,
    width: 16,
    height: 77,
  },
  barLineView3: {
    position: "absolute",
    top: 0,
    left: 120,
    width: 30,
    height: 202,
  },
  backgroundIcon5: {
    position: "absolute",
    transform: [
      {
        translateX: -1,
      },
    ],
    top: 0,
    bottom: 43,
    left: "50%",
    borderRadius: 200,
    maxHeight: "100%",
    width: 16,
  },
  itemText4: {
    position: "absolute",
    transform: [
      {
        translateX: -24.76,
      },
      {
        rotate: "-45deg",
      },
    ],
    bottom: -8.82,
    left: "50%",
    fontSize: 10,
    fontFamily: "Inter",
    color: "#666",
    textAlign: "right",
  },
  dataBarChartBackgroundView4: {
    position: "absolute",
    top: 0,
    left: 0,
    width: 30,
    height: 202,
  },
  backgroundView4: {
    position: "absolute",
    width: "100%",
    top: 0,
    right: "0%",
    bottom: 0,
    left: "0%",
    borderRadius: 8,
    backgroundColor: "#6e7aea",
  },
  dataBarChartFillView4: {
    position: "absolute",
    top: 49,
    left: 14,
    width: 16,
    height: 117,
  },
  barLineView4: {
    position: "absolute",
    top: 0,
    left: 160,
    width: 30,
    height: 202,
  },
  backgroundIcon6: {
    position: "absolute",
    transform: [
      {
        translateX: -1,
      },
    ],
    top: 0,
    bottom: 43,
    left: "50%",
    borderRadius: 200,
    maxHeight: "100%",
    width: 16,
  },
  itemText5: {
    position: "absolute",
    transform: [
      {
        translateX: -14.15,
      },
      {
        rotate: "-45deg",
      },
    ],
    bottom: 1.79,
    left: "50%",
    fontSize: 10,
    fontFamily: "Inter",
    color: "#666",
    textAlign: "right",
  },
  dataBarChartBackgroundView5: {
    position: "absolute",
    top: 0,
    left: 0,
    width: 30,
    height: 202,
  },
  backgroundView5: {
    position: "absolute",
    width: "100%",
    top: 0,
    right: "0%",
    bottom: 0,
    left: "0%",
    borderRadius: 8,
    backgroundColor: "#4b9460",
  },
  dataBarChartFillView5: {
    position: "absolute",
    top: 89,
    left: 14,
    width: 16,
    height: 77,
  },
  barLineView5: {
    position: "absolute",
    top: 0,
    left: 200,
    width: 30,
    height: 202,
  },
  backgroundIcon7: {
    position: "absolute",
    transform: [
      {
        translateX: -1,
      },
    ],
    top: 0,
    bottom: 43,
    left: "50%",
    borderRadius: 200,
    maxHeight: "100%",
    width: 16,
  },
  itemText6: {
    position: "absolute",
    transform: [
      {
        translateX: -23.34,
      },
      {
        rotate: "-45deg",
      },
    ],
    bottom: -7.41,
    left: "50%",
    fontSize: 10,
    fontFamily: "Inter",
    color: "#666",
    textAlign: "right",
  },
  dataBarChartBackgroundView6: {
    position: "absolute",
    top: 0,
    left: 0,
    width: 30,
    height: 202,
  },
  backgroundView6: {
    position: "absolute",
    width: "100%",
    top: 0,
    right: "0%",
    bottom: 0,
    left: "0%",
    borderRadius: 8,
    backgroundColor: "#6e7aea",
  },
  dataBarChartFillView6: {
    position: "absolute",
    top: 49,
    left: 14,
    width: 16,
    height: 117,
  },
  barLineView6: {
    position: "absolute",
    top: 0,
    left: 240,
    width: 30,
    height: 202,
  },
  barsView: {
    position: "absolute",
    top: 16,
    left: 37,
    width: 270,
    height: 202,
  },
  dataMobileGraphView: {
    position: "relative",
    width: 336,
    height: 231,
    flexShrink: 0,
  },
  innerCircleIcon: {
    position: "absolute",
    top: 0,
    left: 0,
    width: 196,
    height: 196,
  },
  sleeptimeText: {
    position: "absolute",
    transform: [
      {
        translateX: -49,
      },
    ],
    top: 80,
    left: "50%",
    fontSize: 24,
    fontWeight: "500",
    fontFamily: "Inter",
    color: "#5db075",
    textAlign: "center",
  },
  sleepText: {
    position: "absolute",
    transform: [
      {
        translateX: -14,
      },
    ],
    top: 117,
    left: "50%",
    fontSize: 10,
    fontFamily: "Inter",
    color: "#bdbdbd",
    textAlign: "center",
  },
  outerCircleIcon: {
    position: "absolute",
    top: 0,
    left: 0,
    width: 196,
    height: 196,
  },
  circularGraphView: {
    position: "relative",
    width: 196,
    height: 196,
    flexShrink: 0,
  },
  frameScrollView: {
    width: "100%",
    boxSizing: "border-box",
  },
  statsText: {
    position: "absolute",
    top: 0,
    right: 0,
    left: 0,
    fontSize: 24,
    fontWeight: "500",
    fontFamily: "Inter",
    color: "#000",
    textAlign: "left",
  },
  itemText7: {
    position: "absolute",
    top: 0,
    left: 32,
    fontSize: 16,
    fontWeight: "600",
    fontFamily: "Inter",
    color: "#000",
    textAlign: "left",
  },
  statisticText: {
    position: "absolute",
    top: 0,
    right: 0,
    fontSize: 14,
    fontFamily: "Inter",
    color: "#000",
    textAlign: "right",
  },
  dividerView: {
    position: "absolute",
    top: 34.5,
    right: -0.5,
    left: -0.5,
    borderStyle: "solid",
    borderColor: "#e8e8e8",
    borderTopWidth: 1,
    height: 1,
  },
  icon: {
    position: "absolute",
    top: 2,
    left: 0,
    width: 16,
    height: 16,
  },
  dataGraphResultView: {
    position: "absolute",
    top: 61,
    left: 0,
    width: 343,
    height: 35,
  },
  itemText8: {
    position: "absolute",
    top: 0,
    left: 32,
    fontSize: 16,
    fontWeight: "600",
    fontFamily: "Inter",
    color: "#000",
    textAlign: "left",
  },
  statisticText1: {
    position: "absolute",
    top: 0,
    right: 0,
    fontSize: 14,
    fontFamily: "Inter",
    color: "#000",
    textAlign: "right",
  },
  dividerView1: {
    position: "absolute",
    top: 34.5,
    right: -0.5,
    left: -0.5,
    borderStyle: "solid",
    borderColor: "#e8e8e8",
    borderTopWidth: 1,
    height: 1,
  },
  icon1: {
    position: "absolute",
    top: 2,
    left: 0,
    width: 16,
    height: 16,
  },
  dataGraphResultView1: {
    position: "absolute",
    top: 112,
    left: 0,
    width: 343,
    height: 35,
  },
  itemText9: {
    position: "absolute",
    top: 0,
    left: 32,
    fontSize: 16,
    fontWeight: "600",
    fontFamily: "Inter",
    color: "#000",
    textAlign: "left",
  },
  statisticText2: {
    position: "absolute",
    top: 0,
    right: 0,
    fontSize: 14,
    fontFamily: "Inter",
    color: "#000",
    textAlign: "right",
  },
  dividerView2: {
    position: "absolute",
    top: 34.5,
    right: -0.5,
    left: -0.5,
    borderStyle: "solid",
    borderColor: "#e8e8e8",
    borderTopWidth: 1,
    height: 1,
  },
  icon2: {
    position: "absolute",
    top: 2,
    left: 0,
    width: 16,
    height: 16,
  },
  dataGraphResultView2: {
    position: "absolute",
    top: 163,
    left: 0,
    width: 343,
    height: 35,
  },
  itemText10: {
    position: "absolute",
    top: 0,
    left: 32,
    fontSize: 16,
    fontWeight: "600",
    fontFamily: "Inter",
    color: "#000",
    textAlign: "left",
  },
  statisticText3: {
    position: "absolute",
    top: 0,
    right: 0,
    fontSize: 14,
    fontFamily: "Inter",
    color: "#000",
    textAlign: "right",
  },
  dividerView3: {
    position: "absolute",
    top: 34.5,
    right: -0.5,
    left: -0.5,
    borderStyle: "solid",
    borderColor: "#e8e8e8",
    borderTopWidth: 1,
    height: 1,
  },
  icon3: {
    position: "absolute",
    top: 2,
    left: 0,
    width: 16,
    height: 16,
  },
  dataGraphResultView3: {
    position: "absolute",
    top: 214,
    left: 0,
    width: 343,
    height: 35,
  },
  itemText11: {
    position: "absolute",
    top: 0,
    left: 32,
    fontSize: 16,
    fontWeight: "600",
    fontFamily: "Inter",
    color: "#000",
    textAlign: "left",
  },
  statisticText4: {
    position: "absolute",
    top: 0,
    right: 0,
    fontSize: 14,
    fontFamily: "Inter",
    color: "#000",
    textAlign: "right",
  },
  dividerView4: {
    position: "absolute",
    top: 34.5,
    right: -0.5,
    left: -0.5,
    borderStyle: "solid",
    borderColor: "#e8e8e8",
    borderTopWidth: 1,
    height: 1,
  },
  icon4: {
    position: "absolute",
    top: 2,
    left: 0,
    width: 16,
    height: 16,
  },
  dataGraphResultView4: {
    position: "absolute",
    top: 265,
    left: 0,
    width: 343,
    height: 35,
  },
  itemText12: {
    position: "absolute",
    top: 0,
    left: 32,
    fontSize: 16,
    fontWeight: "600",
    fontFamily: "Inter",
    color: "#000",
    textAlign: "left",
  },
  statisticText5: {
    position: "absolute",
    top: 0,
    right: 0,
    fontSize: 14,
    fontFamily: "Inter",
    color: "#000",
    textAlign: "right",
  },
  dividerView5: {
    position: "absolute",
    top: 34.5,
    right: -0.5,
    left: -0.5,
    borderStyle: "solid",
    borderColor: "#e8e8e8",
    borderTopWidth: 1,
    height: 1,
  },
  icon5: {
    position: "absolute",
    top: 2,
    left: 0,
    width: 16,
    height: 16,
  },
  dataGraphResultView5: {
    position: "absolute",
    top: 316,
    left: 0,
    width: 343,
    height: 35,
  },
  dataListView: {
    position: "relative",
    width: 343,
    height: 351,
    flexShrink: 0,
  },
  analyzeScrollView: {
    position: "relative",
    backgroundColor: "#fff",
    flex: 1,
    width: "100%",
  },
});

export default Analyze;
