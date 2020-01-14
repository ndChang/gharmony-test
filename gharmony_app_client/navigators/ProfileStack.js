import { createStackNavigator } from "react-navigation-stack";
import Profile from "../views/ProfileView";
const ProfileStack = createStackNavigator(
  {
    ProfileView: {
      screen: Profile,
      //profile,
      navigationOptions: ({ navigation }) => ({
        title: "Profile"
      })
    }
  },
  {
    initialRouteName: "ProfileView",
    defaultNavigationOptions: {
      headerStyle: {},
      headerBackTitleStyle: {}
    }
  }
);

export default ProfileStack;
