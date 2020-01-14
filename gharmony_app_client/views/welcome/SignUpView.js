import React, { Component } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity
} from "react-native";

class SignUpScreen extends Component {
  static navigationOptions = {
    title: "G-Harmony Registration",
    headerRight: <View />
  };

  constructor(props) {
    super(props);
    this.state = {};
  }

  handleTextChange = (key, value) => {
    this.setState({ [key]: value });
  };

  handleSubmit = () => {
    const body = this.state;
    console.log(body);
  };
  render() {
    return (
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <Text>SignUp Screen</Text>
        <TextInput
          style={styles.input}
          placeholder="Name"
          onChangeText={val => this.handleTextChange("name", val)}
          onSubmitEditing={() => {
            this.secondTextInput.focus();
          }}
        />
        <TextInput
          style={styles.input}
          placeholder="Email"
          onChangeText={val => this.handleTextChange("email", val)}
          ref={input => {
            this.secondTextInput = input;
          }}
          onSubmitEditing={() => {
            this.thirdTextInput.focus();
          }}
        />
        <TextInput
          style={styles.input}
          placeholder="Password"
          onChangeText={val => this.handleTextChange("password", val)}
          ref={input => {
            this.thirdTextInput = input;
          }}
          onSubmitEditing={() => {
            this.fourthTextInput.focus();
          }}
        />
        <TextInput
          style={styles.input}
          placeholder="Playstyle"
          onChangeText={val => this.handleTextChange("playstyle", val)}
          ref={input => {
            this.fourthTextInput = input;
          }}
          onSubmitEditing={() => {
            this.fifthTextInput.focus();
          }}
        />
        <TextInput
          style={styles.input}
          placeholder="Game"
          onChangeText={val => this.handleTextChange("game", val)}
          ref={input => {
            this.fifthTextInput = input;
          }}
          onSubmitEditing={() => {
            this.sixthTextInput.focus();
          }}
        />
        <TextInput
          style={styles.input}
          placeholder="Sense of Humor"
          onChangeText={val => this.handleTextChange("senseOfHumor", val)}
          ref={input => {
            this.sixthTextInput = input;
          }}
          onSubmitEditing={() => {
            this.seventhTextInput.focus();
          }}
        />
        <TextInput
          style={styles.input}
          placeholder="Avatar"
          onChangeText={val => this.handleTextChange("avatar", val)}
          ref={input => {
            this.seventhTextInput = input;
          }}
          onSubmitEditing={() => {
            this.eighthTextInput.focus();
          }}
        />
        <TouchableOpacity
          style={styles.button}
          onPress={() => alert("Register")}
          ref={input => {
            this.eighthTextInput = input;
          }}
          onPress={this.handleSubmit}
        >
          <Text style={styles.btnText}>Login</Text>
        </TouchableOpacity>
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

export default SignUpScreen;
