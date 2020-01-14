import React, { Component } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity
} from "react-native";

class HomeScreen extends Component {
  render() {
    return (
      <View style={styles.main}>
        <View style={styles.container}>
          <Text style={styles.container}>WELCOME TO G-HARMONY</Text>
          <TextInput style={styles.input} placeholder="Email" />
          <TextInput
            style={styles.input}
            placeholder="Password"
            secureTextEntry
          />
        </View>
        <View style={styles.container}>
          <TouchableOpacity
            style={styles.button}
            onPress={() => alert("login")}
          >
            <Text style={styles.btnText}>Login</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button}
            onPress={() => this.props.navigation.navigate("SignUp")}
          >
            <Text style={styles.btnText}>Sign-up</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
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

export default HomeScreen;
