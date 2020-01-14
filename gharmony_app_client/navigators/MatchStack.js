import { createStackNavigator } from "react-navigation-stack";
import Match from "../views/MatchView";

const MatchStack = createStackNavigator(
  {
    MatchView: {
      screen: Match,
      //profile,
      navigationOptions: ({ navigation }) => ({
        title: "Match"
      })
    }
  },
  {
    initialRouteName: "MatchView",
    defaultNavigationOptions: {
      headerStyle: {},
      headerBackTitleStyle: {}
    }
  }
);

export default MatchStack;
