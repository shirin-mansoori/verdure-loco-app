const Stack = createNativeStackNavigator();
import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import SplashScreenIcon from "./screens/SplashScreenIcon";
import Home from "./screens/Home";
import Analyze from "./screens/Analyze";
import Profile from "./screens/Profile";
import Feeds from "./screens/Feeds";
import LogIn from "./screens/LogIn";
import SignUp from "./screens/SignUp";
import HomeIcon1 from "./components/HomeIcon1";
import HomeIcon from "./components/HomeIcon";
import FeedsIcon1 from "./components/FeedsIcon1";
import FeedsIcon from "./components/FeedsIcon";
import AnalyzeIcon1 from "./components/AnalyzeIcon1";
import AnalyzeIcon from "./components/AnalyzeIcon";
import ProfileIcon1 from "./components/ProfileIcon1";
import ProfileIcon from "./components/ProfileIcon";

import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { View, Text, Pressable, TouchableOpacity } from "react-native";

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

const Tab = createBottomTabNavigator();
function BottomTabsRoot({ navigation }: any) {
  const [bottomTabItemsNormal] = React.useState([
    <HomeIcon />,
    <FeedsIcon />,
    <AnalyzeIcon />,
    <ProfileIcon />,
  ]);
  const [bottomTabItemsActive] = React.useState([
    <HomeIcon1 />,
    <FeedsIcon1 />,
    <AnalyzeIcon1 />,
    <ProfileIcon1 />,
  ]);
  return (
    <Tab.Navigator
      screenOptions={{ headerShown: false }}
      tabBar={({ state, descriptors, navigation }: any) => {
        const activeIndex = state.index;
        return (
          <View style={{ flexDirection: "row" }}>
            {bottomTabItemsNormal.map((item: any, index: any) => {
              const isFocused = state.index === index;
              return (
                <Pressable
                  style={{ flex: 1 }}
                  onPress={() => {
                    navigation.navigate({
                      name: state.routes[index].name,
                      merge: true,
                    });
                  }}
                >
                  {activeIndex === index
                    ? bottomTabItemsActive[index] || item
                    : item}
                </Pressable>
              );
            })}
          </View>
        );
      }}
    >
      <Tab.Screen
        name="Home"
        component={Home}
        options={{ headerShown: false }}
      />
      <Tab.Screen
        name="Feeds"
        component={Feeds}
        options={{ headerShown: false }}
      />
      <Tab.Screen
        name="Analyze"
        component={Analyze}
        options={{ headerShown: false }}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{ headerShown: false }}
      />
    </Tab.Navigator>
  );
}

const App = () => {
  const [hideSplashScreen, setHideSplashScreen] = React.useState(false);
  const SplashScreen = () => {
    return <SplashScreenIcon />;
  };
  React.useEffect(() => {
    setTimeout(() => {
      setHideSplashScreen(true);
    }, 1000);
  }, []);

  return (
    <>
      <NavigationContainer>
        {hideSplashScreen ? (
          <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name="BottomTabsRoot" component={BottomTabsRoot} />
            <Stack.Screen
              name="SplashScreen"
              component={SplashScreenIcon}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="LogIn"
              component={LogIn}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="SignUp"
              component={SignUp}
              options={{ headerShown: false }}
            />
          </Stack.Navigator>
        ) : (
          <SplashScreen />
        )}
      </NavigationContainer>
    </>
  );
};
export default App;
