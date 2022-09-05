import * as React from "react";
import {
  StatusBar,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  TextInput,
  Pressable,
} from "react-native";
import { useNavigation } from "@react-navigation/native";

const LogIn = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.logInView}>
      <Image
        barStyle="default"
        resizeMode="cover"
        source={require("../assets/iosstatus-barblack3.png")}
      />
      <View style={[styles.pageHeaderView, styles.mt50]}>
        <TouchableOpacity
          style={styles.loginTouchableOpacity}
          activeOpacity={0.2}
          onPress={() => navigation.navigate("SignUp")}
        >
          <Text style={styles.signUpText}>SignUp</Text>
        </TouchableOpacity>
        <Text style={styles.logInText}>Log In</Text>
        <Image
          style={styles.iconX}
          resizeMode="cover"
          source={require("../assets/iconx.png")}
        />
        <Text style={styles.rightText}>Right</Text>
      </View>
      <TextInput
        style={[styles.inputTextTextInput, styles.mt50]}
        placeholder="Email"
        keyboardType="text"
        placeholderTextColor="#bdbdbd"
      />
      <TextInput
        style={[styles.inputTextTextInput1, styles.mt50]}
        placeholder="Password"
        keyboardType="default"
        autoCapitalize="none"
        secureTextEntry
        placeholderTextColor="#bdbdbd"
      />
      <TouchableOpacity
        style={[styles.buttonPrimaryTouchableOpacity, styles.mt50]}
        activeOpacity={0.2}
        onPress={() =>
          navigation.navigate("BottomTabsRoot", { screen: "Home" })
        }
      >
        <Text style={styles.logInText1}>Log In</Text>
      </TouchableOpacity>
      <Text style={[styles.forgotYourPassword, styles.mt50]}>
        Forgot your password?
      </Text>
      <View style={[styles.iOSKeyboardLightAlphabeticView, styles.mt50]}>
        <View style={styles.backgroundView1}>
          <View style={styles.backgroundView} />
        </View>
        <View style={styles.homeIndicatorView1}>
          <View style={styles.homeIndicatorView} />
        </View>
        <View style={styles.keysView}>
          <Image
            style={styles.dictationIcon}
            resizeMode="cover"
            source={require("../assets/dictation.png")}
          />
          <Image
            style={styles.emojiIcon}
            resizeMode="cover"
            source={require("../assets/emoji.png")}
          />
          <View style={styles.returnView}>
            <Image
              style={styles.rectangleIcon}
              resizeMode="cover"
              source={require("../assets/rectangle6.png")}
            />
            <Text style={styles.labelText}>Go</Text>
          </View>
          <View style={styles.spaceView}>
            <Image
              style={styles.rectangleIcon1}
              resizeMode="cover"
              source={require("../assets/rectangle7.png")}
            />
            <Text style={styles.labelText1}>space</Text>
          </View>
          <View style={styles.view}>
            <Image
              style={styles.rectangleIcon2}
              resizeMode="cover"
              source={require("../assets/rectangle8.png")}
            />
            <Text style={styles.labelText2}>123</Text>
          </View>
          <View style={styles.deleteView}>
            <View style={styles.keyLightView}>
              <Image
                style={styles.rectangleIcon3}
                resizeMode="cover"
                source={require("../assets/rectangle9.png")}
              />
              <Text style={styles.labelText3}>{` `}</Text>
            </View>
            <Image
              style={styles.deleteButtonIcon}
              resizeMode="cover"
              source={require("../assets/delete-button.png")}
            />
          </View>
          <View style={styles.shiftView}>
            <View style={styles.keyLightView1}>
              <View style={styles.rectangleView} />
              <Text style={styles.symbolText}>{` `}</Text>
            </View>
            <Image
              style={styles.shiftIcon}
              resizeMode="cover"
              source={require("../assets/shift.png")}
            />
          </View>
          <View style={styles.mView}>
            <View style={styles.rectangleView1} />
            <Text style={styles.symbolText1}>M</Text>
          </View>
          <View style={styles.nView}>
            <View style={styles.rectangleView2} />
            <Text style={styles.symbolText2}>N</Text>
          </View>
          <View style={styles.bView}>
            <View style={styles.rectangleView3} />
            <Text style={styles.symbolText3}>B</Text>
          </View>
          <View style={styles.vView}>
            <View style={styles.rectangleView4} />
            <Text style={styles.symbolText4}>V</Text>
          </View>
          <View style={styles.cView}>
            <View style={styles.rectangleView5} />
            <Text style={styles.symbolText5}>C</Text>
          </View>
          <View style={styles.xView}>
            <View style={styles.rectangleView6} />
            <Text style={styles.symbolText6}>X</Text>
          </View>
          <View style={styles.zView}>
            <View style={styles.rectangleView7} />
            <Text style={styles.symbolText7}>Z</Text>
          </View>
          <View style={styles.lView}>
            <View style={styles.rectangleView8} />
            <Text style={styles.symbolText8}>L</Text>
          </View>
          <View style={styles.kView}>
            <View style={styles.rectangleView9} />
            <Text style={styles.symbolText9}>K</Text>
          </View>
          <View style={styles.jView}>
            <View style={styles.rectangleView10} />
            <Text style={styles.symbolText10}>J</Text>
          </View>
          <View style={styles.hView}>
            <View style={styles.rectangleView11} />
            <Text style={styles.symbolText11}>H</Text>
          </View>
          <View style={styles.gView}>
            <View style={styles.rectangleView12} />
            <Text style={styles.symbolText12}>G</Text>
          </View>
          <View style={styles.fView}>
            <View style={styles.rectangleView13} />
            <Text style={styles.symbolText13}>F</Text>
          </View>
          <View style={styles.dView}>
            <View style={styles.rectangleView14} />
            <Text style={styles.symbolText14}>D</Text>
          </View>
          <View style={styles.sView}>
            <View style={styles.rectangleView15} />
            <Text style={styles.symbolText15}>S</Text>
          </View>
          <View style={styles.aView}>
            <View style={styles.rectangleView16} />
            <Text style={styles.symbolText16}>A</Text>
          </View>
          <View style={styles.pView}>
            <View style={styles.rectangleView17} />
            <Text style={styles.symbolText17}>P</Text>
          </View>
          <View style={styles.oView}>
            <View style={styles.rectangleView18} />
            <Text style={styles.symbolText18}>O</Text>
          </View>
          <View style={styles.iView}>
            <View style={styles.rectangleView19} />
            <Text style={styles.symbolText19}>I</Text>
          </View>
          <View style={styles.uView}>
            <View style={styles.rectangleView20} />
            <Text style={styles.symbolText20}>U</Text>
          </View>
          <View style={styles.yView}>
            <View style={styles.rectangleView21} />
            <Text style={styles.symbolText21}>Y</Text>
          </View>
          <View style={styles.tView}>
            <View style={styles.rectangleView22} />
            <Text style={styles.symbolText22}>T</Text>
          </View>
          <View style={styles.rView}>
            <View style={styles.rectangleView23} />
            <Text style={styles.symbolText23}>R</Text>
          </View>
          <View style={styles.eView}>
            <View style={styles.rectangleView24} />
            <Text style={styles.symbolText24}>E</Text>
          </View>
          <View style={styles.wView}>
            <View style={styles.rectangleView25} />
            <Text style={styles.symbolText25}>W</Text>
          </View>
          <View style={styles.qView}>
            <View style={styles.rectangleView26} />
            <Text style={styles.symbolText26}>Q</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  mt50: {
    marginTop: 50,
  },
  signUpText: {
    fontSize: 16,
    fontWeight: "600",
    fontFamily: "Inter",
    color: "#5db075",
    textAlign: "right",
  },
  loginTouchableOpacity: {
    position: "absolute",
    top: 8,
    right: 0,
  },
  logInText: {
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
  rightText: {
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
  inputTextTextInput: {
    position: "relative",
    backgroundColor: "#e8e8e8",
    width: 343,
    height: 50,
    flexShrink: 0,
  },
  inputTextTextInput1: {
    position: "relative",
    backgroundColor: "#e8e8e8",
    width: 343,
    height: 50,
    flexShrink: 0,
  },
  logInText1: {
    position: "relative",
    fontSize: 15,
    fontWeight: "600",
    fontFamily: "Inter",
    color: "#fff",
    textAlign: "center",
  },
  buttonPrimaryTouchableOpacity: {
    borderRadius: 100,
    backgroundColor: "#6e7aea",
    flexDirection: "column",
    paddingHorizontal: 32,
    paddingVertical: 16,
    boxSizing: "border-box",
    alignItems: "center",
    justifyContent: "flex-end",
  },
  forgotYourPassword: {
    position: "relative",
    fontSize: 15,
    fontWeight: "600",
    fontFamily: "Inter",
    color: "#5db075",
    textAlign: "left",
  },
  backgroundView: {
    position: "absolute",
    height: "100%",
    width: "100%",
    top: "0%",
    right: "0%",
    bottom: "0%",
    left: "0%",
    backgroundColor: "#d1d5db",
  },
  backgroundView1: {
    position: "absolute",
    height: "100%",
    width: "100%",
    top: "0%",
    right: "0%",
    bottom: "0%",
    left: "0%",
  },
  homeIndicatorView: {
    position: "absolute",
    transform: [
      {
        translateX: -66.5,
      },
    ],
    bottom: 8,
    left: "50%",
    borderRadius: 100,
    backgroundColor: "#000",
    width: 134,
    height: 5,
  },
  homeIndicatorView1: {
    position: "absolute",
    height: "11.68%",
    width: "100%",
    top: "88.32%",
    right: "0%",
    bottom: "0%",
    left: "0%",
  },
  dictationIcon: {
    position: "relative",
    width: 15,
    height: 25,
  },
  emojiIcon: {
    position: "relative",
    width: 27,
    height: 27,
  },
  rectangleIcon: {
    position: "absolute",
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    borderRadius: 4.6,
    maxWidth: "100%",
    maxHeight: "100%",
  },
  labelText: {
    position: "absolute",
    height: "50%",
    top: "26.19%",
    right: 0,
    bottom: "23.81%",
    left: 0,
    fontSize: 16,
    letterSpacing: -0.32,
    lineHeight: 21,
    fontFamily: "SF Pro Text",
    color: "#000",
    textAlign: "center",
  },
  returnView: {
    position: "absolute",
    height: "16.22%",
    width: "23.85%",
    top: "62.55%",
    right: "0%",
    bottom: "21.24%",
    left: "76.15%",
  },
  rectangleIcon1: {
    position: "absolute",
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    borderRadius: 4.6,
    maxWidth: "100%",
    maxHeight: "100%",
  },
  labelText1: {
    position: "absolute",
    height: "50%",
    top: "26.19%",
    right: 0,
    bottom: "23.81%",
    left: 0,
    fontSize: 16,
    letterSpacing: -0.32,
    lineHeight: 21,
    fontFamily: "SF Pro Text",
    color: "#000",
    textAlign: "center",
  },
  spaceView: {
    position: "absolute",
    height: "16.22%",
    width: "49.32%",
    top: "62.55%",
    right: "25.47%",
    bottom: "21.24%",
    left: "25.2%",
  },
  rectangleIcon2: {
    position: "absolute",
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    borderRadius: 4.6,
    maxWidth: "100%",
    maxHeight: "100%",
  },
  labelText2: {
    position: "absolute",
    height: "50%",
    top: "26.19%",
    right: 0,
    bottom: "23.81%",
    left: 0,
    fontSize: 16,
    letterSpacing: -0.32,
    lineHeight: 21,
    fontFamily: "SF Pro Text",
    color: "#000",
    textAlign: "center",
  },
  view: {
    position: "absolute",
    height: "16.22%",
    width: "23.58%",
    top: "62.55%",
    right: "76.42%",
    bottom: "21.24%",
    left: "0%",
  },
  rectangleIcon3: {
    position: "absolute",
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    borderRadius: 4.6,
    maxWidth: "100%",
    maxHeight: "100%",
  },
  labelText3: {
    position: "absolute",
    height: "50%",
    top: "26.19%",
    right: 0,
    bottom: "23.81%",
    left: 0,
    fontSize: 16,
    letterSpacing: -0.32,
    lineHeight: 21,
    fontFamily: "SF Pro Text",
    color: "#000",
    textAlign: "center",
  },
  keyLightView: {
    position: "absolute",
    height: "100%",
    width: "100%",
    top: "0%",
    right: "0%",
    bottom: "0%",
    left: "0%",
  },
  deleteButtonIcon: {
    position: "relative",
    width: 22.66,
    height: 16.99,
  },
  deleteView: {
    position: "absolute",
    height: "16.22%",
    width: "11.38%",
    top: "41.7%",
    right: "0%",
    bottom: "42.08%",
    left: "88.62%",
  },
  rectangleView: {
    position: "absolute",
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    borderRadius: 4.6,
    backgroundColor: "#fcfcfe",
    shadowColor: "#898a8d",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowRadius: 0,
    elevation: 0,
    shadowOpacity: 1,
  },
  symbolText: {
    position: "absolute",
    transform: [
      {
        translateY: -13,
      },
    ],
    top: "50%",
    left: "48.07%",
    fontSize: 22.5,
    letterSpacing: -0.55,
    fontFamily: "SF Pro Text",
    color: "#000",
    textAlign: "center",
  },
  keyLightView1: {
    position: "absolute",
    height: "100%",
    width: "100%",
    top: "0%",
    right: "0%",
    bottom: "0%",
    left: "0%",
  },
  shiftIcon: {
    position: "absolute",
    height: "39.18%",
    width: "44.95%",
    top: "29.05%",
    right: "27.29%",
    bottom: "31.77%",
    left: "27.76%",
    maxWidth: "100%",
    maxHeight: "100%",
  },
  shiftView: {
    position: "absolute",
    height: "16.22%",
    width: "11.38%",
    top: "41.7%",
    right: "88.62%",
    bottom: "42.08%",
    left: "0%",
  },
  rectangleView1: {
    position: "absolute",
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    borderRadius: 4.6,
    backgroundColor: "#fcfcfe",
    shadowColor: "#898a8d",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowRadius: 0,
    elevation: 0,
    shadowOpacity: 1,
  },
  symbolText1: {
    position: "absolute",
    transform: [
      {
        translateY: -13,
      },
    ],
    width: "62.5%",
    top: "50%",
    right: "18.75%",
    left: "18.75%",
    fontSize: 22.5,
    letterSpacing: -0.55,
    fontFamily: "SF Pro Text",
    color: "#000",
    textAlign: "center",
  },
  mView: {
    position: "absolute",
    height: "16.22%",
    width: "8.67%",
    top: "41.7%",
    right: "14.91%",
    bottom: "42.08%",
    left: "76.42%",
  },
  rectangleView2: {
    position: "absolute",
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    borderRadius: 4.6,
    backgroundColor: "#fcfcfe",
    shadowColor: "#898a8d",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowRadius: 0,
    elevation: 0,
    shadowOpacity: 1,
  },
  symbolText2: {
    position: "absolute",
    transform: [
      {
        translateY: -13,
      },
    ],
    width: "53.13%",
    top: "50%",
    right: "21.88%",
    left: "25%",
    fontSize: 22.5,
    letterSpacing: -0.55,
    fontFamily: "SF Pro Text",
    color: "#000",
    textAlign: "center",
  },
  nView: {
    position: "absolute",
    height: "16.22%",
    width: "8.67%",
    top: "41.7%",
    right: "25.2%",
    bottom: "42.08%",
    left: "66.12%",
  },
  rectangleView3: {
    position: "absolute",
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    borderRadius: 4.6,
    backgroundColor: "#fcfcfe",
    shadowColor: "#898a8d",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowRadius: 0,
    elevation: 0,
    shadowOpacity: 1,
  },
  symbolText3: {
    position: "absolute",
    transform: [
      {
        translateY: -13,
      },
    ],
    width: "46.88%",
    top: "50%",
    right: "25%",
    left: "28.13%",
    fontSize: 22.5,
    letterSpacing: -0.55,
    fontFamily: "SF Pro Text",
    color: "#000",
    textAlign: "center",
  },
  bView: {
    position: "absolute",
    height: "16.22%",
    width: "8.67%",
    top: "41.7%",
    right: "35.5%",
    bottom: "42.08%",
    left: "55.83%",
  },
  rectangleView4: {
    position: "absolute",
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    borderRadius: 4.6,
    backgroundColor: "#fcfcfe",
    shadowColor: "#898a8d",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowRadius: 0,
    elevation: 0,
    shadowOpacity: 1,
  },
  symbolText4: {
    position: "absolute",
    transform: [
      {
        translateY: -13,
      },
    ],
    width: "50%",
    top: "50%",
    right: "25%",
    left: "25%",
    fontSize: 22.5,
    letterSpacing: -0.55,
    fontFamily: "SF Pro Text",
    color: "#000",
    textAlign: "center",
  },
  vView: {
    position: "absolute",
    height: "16.22%",
    width: "8.67%",
    top: "41.7%",
    right: "45.53%",
    bottom: "42.08%",
    left: "45.8%",
  },
  rectangleView5: {
    position: "absolute",
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    borderRadius: 4.6,
    backgroundColor: "#fcfcfe",
    shadowColor: "#898a8d",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowRadius: 0,
    elevation: 0,
    shadowOpacity: 1,
  },
  symbolText5: {
    position: "absolute",
    transform: [
      {
        translateY: -13,
      },
    ],
    width: "53.13%",
    top: "50%",
    right: "21.88%",
    left: "25%",
    fontSize: 22.5,
    letterSpacing: -0.55,
    fontFamily: "SF Pro Text",
    color: "#000",
    textAlign: "center",
  },
  cView: {
    position: "absolute",
    height: "16.22%",
    width: "8.67%",
    top: "41.7%",
    right: "55.83%",
    bottom: "42.08%",
    left: "35.5%",
  },
  rectangleView6: {
    position: "absolute",
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    borderRadius: 4.6,
    backgroundColor: "#fcfcfe",
    shadowColor: "#898a8d",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowRadius: 0,
    elevation: 0,
    shadowOpacity: 1,
  },
  symbolText6: {
    position: "absolute",
    transform: [
      {
        translateY: -13,
      },
    ],
    width: "50%",
    top: "50%",
    right: "25%",
    left: "25%",
    fontSize: 22.5,
    letterSpacing: -0.55,
    fontFamily: "SF Pro Text",
    color: "#000",
    textAlign: "center",
  },
  xView: {
    position: "absolute",
    height: "16.22%",
    width: "8.67%",
    top: "41.7%",
    right: "65.85%",
    bottom: "42.08%",
    left: "25.47%",
  },
  rectangleView7: {
    position: "absolute",
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    borderRadius: 4.6,
    backgroundColor: "#fcfcfe",
    shadowColor: "#898a8d",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowRadius: 0,
    elevation: 0,
    shadowOpacity: 1,
  },
  symbolText7: {
    position: "absolute",
    transform: [
      {
        translateY: -13,
      },
    ],
    width: "46.88%",
    top: "50%",
    right: "25%",
    left: "28.13%",
    fontSize: 22.5,
    letterSpacing: -0.55,
    fontFamily: "SF Pro Text",
    color: "#000",
    textAlign: "center",
  },
  zView: {
    position: "absolute",
    height: "16.22%",
    width: "8.67%",
    top: "41.7%",
    right: "76.15%",
    bottom: "42.08%",
    left: "15.18%",
  },
  rectangleView8: {
    position: "absolute",
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    borderRadius: 4.6,
    backgroundColor: "#fcfcfe",
    shadowColor: "#898a8d",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowRadius: 0,
    elevation: 0,
    shadowOpacity: 1,
  },
  symbolText8: {
    position: "absolute",
    transform: [
      {
        translateY: -13,
      },
    ],
    width: "40.63%",
    top: "50%",
    right: "28.13%",
    left: "31.25%",
    fontSize: 22.5,
    letterSpacing: -0.55,
    fontFamily: "SF Pro Text",
    color: "#000",
    textAlign: "center",
  },
  lView: {
    position: "absolute",
    height: "16.22%",
    width: "8.67%",
    top: "20.85%",
    right: "4.88%",
    bottom: "62.93%",
    left: "86.45%",
  },
  rectangleView9: {
    position: "absolute",
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    borderRadius: 4.6,
    backgroundColor: "#fcfcfe",
    shadowColor: "#898a8d",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowRadius: 0,
    elevation: 0,
    shadowOpacity: 1,
  },
  symbolText9: {
    position: "absolute",
    transform: [
      {
        translateY: -13,
      },
    ],
    width: "46.88%",
    top: "50%",
    right: "25%",
    left: "28.13%",
    fontSize: 22.5,
    letterSpacing: -0.55,
    fontFamily: "SF Pro Text",
    color: "#000",
    textAlign: "center",
  },
  kView: {
    position: "absolute",
    height: "16.22%",
    width: "8.67%",
    top: "20.85%",
    right: "15.18%",
    bottom: "62.93%",
    left: "76.15%",
  },
  rectangleView10: {
    position: "absolute",
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    borderRadius: 4.6,
    backgroundColor: "#fcfcfe",
    shadowColor: "#898a8d",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowRadius: 0,
    elevation: 0,
    shadowOpacity: 1,
  },
  symbolText10: {
    position: "absolute",
    transform: [
      {
        translateY: -13,
      },
    ],
    width: "40.63%",
    top: "50%",
    right: "28.13%",
    left: "31.25%",
    fontSize: 22.5,
    letterSpacing: -0.55,
    fontFamily: "SF Pro Text",
    color: "#000",
    textAlign: "center",
  },
  jView: {
    position: "absolute",
    height: "16.22%",
    width: "8.67%",
    top: "20.85%",
    right: "25.2%",
    bottom: "62.93%",
    left: "66.12%",
  },
  rectangleView11: {
    position: "absolute",
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    borderRadius: 4.6,
    backgroundColor: "#fcfcfe",
    shadowColor: "#898a8d",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowRadius: 0,
    elevation: 0,
    shadowOpacity: 1,
  },
  symbolText11: {
    position: "absolute",
    transform: [
      {
        translateY: -13,
      },
    ],
    width: "53.13%",
    top: "50%",
    right: "21.88%",
    left: "25%",
    fontSize: 22.5,
    letterSpacing: -0.55,
    fontFamily: "SF Pro Text",
    color: "#000",
    textAlign: "center",
  },
  hView: {
    position: "absolute",
    height: "16.22%",
    width: "8.67%",
    top: "20.85%",
    right: "35.5%",
    bottom: "62.93%",
    left: "55.83%",
  },
  rectangleView12: {
    position: "absolute",
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    borderRadius: 4.6,
    backgroundColor: "#fcfcfe",
    shadowColor: "#898a8d",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowRadius: 0,
    elevation: 0,
    shadowOpacity: 1,
  },
  symbolText12: {
    position: "absolute",
    transform: [
      {
        translateY: -13,
      },
    ],
    width: "53.13%",
    top: "50%",
    right: "21.88%",
    left: "25%",
    fontSize: 22.5,
    letterSpacing: -0.55,
    fontFamily: "SF Pro Text",
    color: "#000",
    textAlign: "center",
  },
  gView: {
    position: "absolute",
    height: "16.22%",
    width: "8.67%",
    top: "20.85%",
    right: "45.53%",
    bottom: "62.93%",
    left: "45.8%",
  },
  rectangleView13: {
    position: "absolute",
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    borderRadius: 4.6,
    backgroundColor: "#fcfcfe",
    shadowColor: "#898a8d",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowRadius: 0,
    elevation: 0,
    shadowOpacity: 1,
  },
  symbolText13: {
    position: "absolute",
    transform: [
      {
        translateY: -13,
      },
    ],
    width: "40.63%",
    top: "50%",
    right: "28.13%",
    left: "31.25%",
    fontSize: 22.5,
    letterSpacing: -0.55,
    fontFamily: "SF Pro Text",
    color: "#000",
    textAlign: "center",
  },
  fView: {
    position: "absolute",
    height: "16.22%",
    width: "8.67%",
    top: "20.85%",
    right: "55.83%",
    bottom: "62.93%",
    left: "35.5%",
  },
  rectangleView14: {
    position: "absolute",
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    borderRadius: 4.6,
    backgroundColor: "#fcfcfe",
    shadowColor: "#898a8d",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowRadius: 0,
    elevation: 0,
    shadowOpacity: 1,
  },
  symbolText14: {
    position: "absolute",
    transform: [
      {
        translateY: -13,
      },
    ],
    width: "53.13%",
    top: "50%",
    right: "21.88%",
    left: "25%",
    fontSize: 22.5,
    letterSpacing: -0.55,
    fontFamily: "SF Pro Text",
    color: "#000",
    textAlign: "center",
  },
  dView: {
    position: "absolute",
    height: "16.22%",
    width: "8.67%",
    top: "20.85%",
    right: "65.85%",
    bottom: "62.93%",
    left: "25.47%",
  },
  rectangleView15: {
    position: "absolute",
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    borderRadius: 4.6,
    backgroundColor: "#fcfcfe",
    shadowColor: "#898a8d",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowRadius: 0,
    elevation: 0,
    shadowOpacity: 1,
  },
  symbolText15: {
    position: "absolute",
    transform: [
      {
        translateY: -13,
      },
    ],
    width: "46.88%",
    top: "50%",
    right: "25%",
    left: "28.13%",
    fontSize: 22.5,
    letterSpacing: -0.55,
    fontFamily: "SF Pro Text",
    color: "#000",
    textAlign: "center",
  },
  sView: {
    position: "absolute",
    height: "16.22%",
    width: "8.67%",
    top: "20.85%",
    right: "76.15%",
    bottom: "62.93%",
    left: "15.18%",
  },
  rectangleView16: {
    position: "absolute",
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    borderRadius: 4.6,
    backgroundColor: "#fcfcfe",
    shadowColor: "#898a8d",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowRadius: 0,
    elevation: 0,
    shadowOpacity: 1,
  },
  symbolText16: {
    position: "absolute",
    transform: [
      {
        translateY: -13,
      },
    ],
    width: "50%",
    top: "50%",
    right: "25%",
    left: "25%",
    fontSize: 22.5,
    letterSpacing: -0.55,
    fontFamily: "SF Pro Text",
    color: "#000",
    textAlign: "center",
  },
  aView: {
    position: "absolute",
    height: "16.22%",
    width: "8.67%",
    top: "20.85%",
    right: "86.18%",
    bottom: "62.93%",
    left: "5.15%",
  },
  rectangleView17: {
    position: "absolute",
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    borderRadius: 4.6,
    backgroundColor: "#fcfcfe",
    shadowColor: "#898a8d",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowRadius: 0,
    elevation: 0,
    shadowOpacity: 1,
  },
  symbolText17: {
    position: "absolute",
    transform: [
      {
        translateY: -13,
      },
    ],
    width: "46.88%",
    top: "50%",
    right: "25%",
    left: "28.13%",
    fontSize: 22.5,
    letterSpacing: -0.55,
    fontFamily: "SF Pro Text",
    color: "#000",
    textAlign: "center",
  },
  pView: {
    position: "absolute",
    height: "16.22%",
    width: "8.67%",
    top: "0%",
    right: "0%",
    bottom: "83.78%",
    left: "91.33%",
  },
  rectangleView18: {
    position: "absolute",
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    borderRadius: 4.6,
    backgroundColor: "#fcfcfe",
    shadowColor: "#898a8d",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowRadius: 0,
    elevation: 0,
    shadowOpacity: 1,
  },
  symbolText18: {
    position: "absolute",
    transform: [
      {
        translateY: -13,
      },
    ],
    width: "56.25%",
    top: "50%",
    right: "21.88%",
    left: "21.88%",
    fontSize: 22.5,
    letterSpacing: -0.55,
    fontFamily: "SF Pro Text",
    color: "#000",
    textAlign: "center",
  },
  oView: {
    position: "absolute",
    height: "16.22%",
    width: "8.67%",
    top: "0%",
    right: "10.03%",
    bottom: "83.78%",
    left: "81.3%",
  },
  rectangleView19: {
    position: "absolute",
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    borderRadius: 4.6,
    backgroundColor: "#fcfcfe",
    shadowColor: "#898a8d",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowRadius: 0,
    elevation: 0,
    shadowOpacity: 1,
  },
  symbolText19: {
    position: "absolute",
    transform: [
      {
        translateY: -13,
      },
    ],
    width: "21.88%",
    top: "50%",
    right: "37.5%",
    left: "40.63%",
    fontSize: 22.5,
    letterSpacing: -0.55,
    fontFamily: "SF Pro Text",
    color: "#000",
    textAlign: "center",
  },
  iView: {
    position: "absolute",
    height: "16.22%",
    width: "8.67%",
    top: "0%",
    right: "20.33%",
    bottom: "83.78%",
    left: "71%",
  },
  rectangleView20: {
    position: "absolute",
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    borderRadius: 4.6,
    backgroundColor: "#fcfcfe",
    shadowColor: "#898a8d",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowRadius: 0,
    elevation: 0,
    shadowOpacity: 1,
  },
  symbolText20: {
    position: "absolute",
    transform: [
      {
        translateY: -13,
      },
    ],
    width: "53.13%",
    top: "50%",
    right: "21.88%",
    left: "25%",
    fontSize: 22.5,
    letterSpacing: -0.55,
    fontFamily: "SF Pro Text",
    color: "#000",
    textAlign: "center",
  },
  uView: {
    position: "absolute",
    height: "16.22%",
    width: "8.67%",
    top: "0%",
    right: "30.35%",
    bottom: "83.78%",
    left: "60.98%",
  },
  rectangleView21: {
    position: "absolute",
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    borderRadius: 4.6,
    backgroundColor: "#fcfcfe",
    shadowColor: "#898a8d",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowRadius: 0,
    elevation: 0,
    shadowOpacity: 1,
  },
  symbolText21: {
    position: "absolute",
    transform: [
      {
        translateY: -13,
      },
    ],
    width: "46.88%",
    top: "50%",
    right: "25%",
    left: "28.13%",
    fontSize: 22.5,
    letterSpacing: -0.55,
    fontFamily: "SF Pro Text",
    color: "#000",
    textAlign: "center",
  },
  yView: {
    position: "absolute",
    height: "16.22%",
    width: "8.67%",
    top: "0%",
    right: "40.65%",
    bottom: "83.78%",
    left: "50.68%",
  },
  rectangleView22: {
    position: "absolute",
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    borderRadius: 4.6,
    backgroundColor: "#fcfcfe",
    shadowColor: "#898a8d",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowRadius: 0,
    elevation: 0,
    shadowOpacity: 1,
  },
  symbolText22: {
    position: "absolute",
    transform: [
      {
        translateY: -13,
      },
    ],
    width: "46.88%",
    top: "50%",
    right: "25%",
    left: "28.13%",
    fontSize: 22.5,
    letterSpacing: -0.55,
    fontFamily: "SF Pro Text",
    color: "#000",
    textAlign: "center",
  },
  tView: {
    position: "absolute",
    height: "16.22%",
    width: "8.67%",
    top: "0%",
    right: "50.68%",
    bottom: "83.78%",
    left: "40.65%",
  },
  rectangleView23: {
    position: "absolute",
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    borderRadius: 4.6,
    backgroundColor: "#fcfcfe",
    shadowColor: "#898a8d",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowRadius: 0,
    elevation: 0,
    shadowOpacity: 1,
  },
  symbolText23: {
    position: "absolute",
    transform: [
      {
        translateY: -13,
      },
    ],
    width: "46.88%",
    top: "50%",
    right: "25%",
    left: "28.13%",
    fontSize: 22.5,
    letterSpacing: -0.55,
    fontFamily: "SF Pro Text",
    color: "#000",
    textAlign: "center",
  },
  rView: {
    position: "absolute",
    height: "16.22%",
    width: "8.67%",
    top: "0%",
    right: "60.98%",
    bottom: "83.78%",
    left: "30.35%",
  },
  rectangleView24: {
    position: "absolute",
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    borderRadius: 4.6,
    backgroundColor: "#fcfcfe",
    shadowColor: "#898a8d",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowRadius: 0,
    elevation: 0,
    shadowOpacity: 1,
  },
  symbolText24: {
    position: "absolute",
    transform: [
      {
        translateY: -13,
      },
    ],
    width: "43.75%",
    top: "50%",
    right: "28.13%",
    left: "28.13%",
    fontSize: 22.5,
    letterSpacing: -0.55,
    fontFamily: "SF Pro Text",
    color: "#000",
    textAlign: "center",
  },
  eView: {
    position: "absolute",
    height: "16.22%",
    width: "8.67%",
    top: "0%",
    right: "71%",
    bottom: "83.78%",
    left: "20.33%",
  },
  rectangleView25: {
    position: "absolute",
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    borderRadius: 4.6,
    backgroundColor: "#fcfcfe",
    shadowColor: "#898a8d",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowRadius: 0,
    elevation: 0,
    shadowOpacity: 1,
  },
  symbolText25: {
    position: "absolute",
    transform: [
      {
        translateY: -13,
      },
    ],
    width: "68.75%",
    top: "50%",
    right: "15.63%",
    left: "15.63%",
    fontSize: 22.5,
    letterSpacing: -0.55,
    fontFamily: "SF Pro Text",
    color: "#000",
    textAlign: "center",
  },
  wView: {
    position: "absolute",
    height: "16.22%",
    width: "8.67%",
    top: "0%",
    right: "81.3%",
    bottom: "83.78%",
    left: "10.03%",
  },
  rectangleView26: {
    position: "absolute",
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    borderRadius: 4.6,
    backgroundColor: "#fcfcfe",
    shadowColor: "#898a8d",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowRadius: 0,
    elevation: 0,
    shadowOpacity: 1,
  },
  symbolText26: {
    position: "absolute",
    transform: [
      {
        translateY: -13,
      },
    ],
    width: "56.25%",
    top: "50%",
    right: "21.88%",
    left: "21.88%",
    fontSize: 22.5,
    letterSpacing: -0.55,
    fontFamily: "SF Pro Text",
    color: "#000",
    textAlign: "center",
  },
  qView: {
    position: "absolute",
    height: "16.22%",
    width: "8.67%",
    top: "0%",
    right: "91.33%",
    bottom: "83.78%",
    left: "0%",
  },
  keysView: {
    position: "absolute",
    height: "89%",
    width: "98.4%",
    top: "2.75%",
    right: "0.8%",
    bottom: "8.25%",
    left: "0.8%",
  },
  iOSKeyboardLightAlphabeticView: {
    position: "relative",
    backgroundColor: "#ccced3",
    width: 375,
    height: 291,
    flexShrink: 0,
    display: "none",
  },
  logInView: {
    position: "relative",
    backgroundColor: "#fff",
    flex: 1,
    width: "100%",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "flex-start",
  },
});

export default LogIn;
