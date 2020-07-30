import React, { useState } from 'react';
import { StyleSheet, View, Text, Button } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import firebase from "firebase";

const styles = StyleSheet.create({
  container: {
    alignItems: "center"
  },
  textInput: {
    borderWidth: 2,
    width: 250,
    padding: 10,
    margin: 10,
    borderRadius: 20,
    backgroundColor: "#fff"
  },
  textContainer: {
    fontSize: 20,
    color: "#fff"
  },
  errorContainer: {
    backgroundColor: "#f00",
    width: 320,
    height: 100,
    borderRadius: 20,
    padding: 20,
    marginBottom: 20
  },
  errorText: {
    color: "#fff",
    fontSize: 18,
  }
});

const LoginScreenComponent = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);

  const signUp = () => {
    firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then(() => {
        setEmail("")
        setPassword("")
        console.log("Sign up successfull")
      })
      .catch((e) => {
        setError(e);
      });
  };
  const logIn = () => {
    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then(() => {
        console.log("Log In successfull")
      })
      .catch((e) => {
        setError(e);
      });;
  }

  return (
    <View style={styles.container}>
      {error && (
        <View style={styles.errorContainer}>
          <Text
            style={styles.errorText}
            numberOfLines={3}
            ellipsizeMode="tail"
          >
            {error.message}
          </Text>
        </View>
      )}
      <Text style={styles.textContainer}>
        Email Id
      </Text>
      <TextInput
        style={styles.textInput}
        autoCapitalize="none"
        autoCorrect={false}
        placeholder={"Enter Email"}
        value={email}
        onChangeText={currentText => setEmail(currentText)}
      />
      <Text style={styles.textContainer}>
        Password
      </Text>
      <TextInput
        style={styles.textInput}
        autoCapitalize="none"
        autoCorrect={false}
        placeholder={"Enter Password"}
        secureTextEntry={true}
        value={password}
        onChangeText={currentText => setPassword(currentText)}
      />
      <Button
        title={"Login"}
        onPress={() => logIn()}
      />
      <Button
        title={"Sign Up"}
        onPress={() => signUp()}
      />
    </View>
  );
};

export default LoginScreenComponent;