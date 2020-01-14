import { createAppContainer, createSwitchNavigator } from "react-navigation";
import TabNavigator from "./navigators/TabNavigator";
import { AsyncStorage } from "react-native";
import React, { Component } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity
} from "react-native";
import { createStackNavigator } from "react-navigation-stack";
import { RotationGestureHandler } from "react-native-gesture-handler";
import HomeScreen from "./views/welcome/HomeView";
import SignUpScreen from "./views/welcome/SignUpView";

// class HomeScreen extends Component {
//   render() {
//     return (
//       <View style={styles.main}>
//         <View style={styles.container}>
//           <Text style={styles.container}>WELCOME TO G-HARMONY</Text>
//           <TextInput style={styles.input} placeholder="Email" />
//           <TextInput
//             style={styles.input}
//             placeholder="Password"
//             secureTextEntry
//           />
//         </View>
//         <View style={styles.container}>
//           <TouchableOpacity
//             style={styles.button}
//             onPress={() => alert("login")}
//           >
//             <Text style={styles.btnText}>Login</Text>
//           </TouchableOpacity>
//           <TouchableOpacity
//             style={styles.button}
//             onPress={() => this.props.navigation.navigate("SignUp")}
//           >
//             <Text style={styles.btnText}>Sign-up</Text>
//           </TouchableOpacity>
//         </View>
//       </View>
//     );
//   }
// }

// class SignUpScreen extends Component {
//   static navigationOptions = {
//     title: "G-Harmony Registration",
//     headerRight: <View />
//   };

//   constructor(props) {
//     super(props);
//     this.state = {};
//   }

//   render() {
//     return (
//       <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
//         <Text>SignUp Screen</Text>
//         <TextInput style={styles.input} placeholder="Name" />
//         <TextInput style={styles.input} placeholder="Email" />
//         <TextInput style={styles.input} placeholder="Password" />
//         <TextInput style={styles.input} placeholder="Playstyle" />
//         <TextInput style={styles.input} placeholder="Game" />
//         <TextInput style={styles.input} placeholder="Sense of Humor" />
//         <TextInput style={styles.input} placeholder="Avatar" />
//         <TouchableOpacity
//           style={styles.button}
//           onPress={() => alert("Register")}
//         >
//           <Text style={styles.btnText}>Login</Text>
//         </TouchableOpacity>
//       </View>
//     );
//   }
// }
const RootStack = createStackNavigator(
  {
    Home: HomeScreen,
    SignUp: SignUpScreen
  },
  {
    initialRouteName: "Home"
  }
);

const AppContainer = createAppContainer(RootStack);
const UserContainer = createAppContainer(TabNavigator);

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: ""
    };
  }
  render() {
    return this.state.user ? <UserContainer /> : <AppContainer />;
  }
}
const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
    color: "black"
  },
  main: {
    marginTop: 200,
    height: 1000
  },
  button: {
    width: 150,
    height: 42,
    borderWidth: 0.5,
    borderColor: "black",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "black",
    borderRadius: 7
  },
  input: {
    borderWidth: 0.5,
    borderRadius: 7,
    borderColor: "black",
    width: "85%",
    height: 42
  },
  btnText: {
    color: "white"
  }
});
