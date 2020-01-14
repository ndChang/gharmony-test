import React from "react";
import { createBottomTabNavigator } from "react-navigation-tabs";
import { MaterialIcons } from "@expo/vector-icons";
import ProfileStack from "./ProfileStack";
import MatchStack from "./MatchStack";

const TabNavigator = createBottomTabNavigator(
  {
    // Navigator routes
    Profile: ProfileStack,
    // Home
    Match: MatchStack
  },
  {
    defaultNavigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ focused, horizontal, tintColor }) => {
        const { routeName } = navigation.state;
        let IconComponent = MaterialIcons;
        let iconName;
        if (routeName === "Profiles") {
          //   iconName = "profile";
          iconName = focused
            ? "ios-information-circle"
            : "ios-information-circle-outline";
        } else if (routeName === "Match") {
          iconName = focused
            ? "ios-information-circle"
            : "ios-information-circle-outline";
        }
        return <IconComponent name={iconName} size={32} color={tintColor} />;
      }
    })
  }
);

export default TabNavigator;
