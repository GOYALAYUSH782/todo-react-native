import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import NotesScreenComponent from "./src/NotesScreenComponent";
import LoginScreenComponent from "./src/LoginScreenComponent";
import firebase from 'firebase';

export default function App() {
  const [userLoggedIn, setUserLoggedIn] = useState(false);

  if (firebase.apps.length === 0) {
    const firebaseConfig = {
      apiKey: "AIzaSyDbKbN7j3H57JUVPQpvXJAO9Y8d-pftVEk",
      authDomain: "notes-react-6c629.firebaseapp.com",
      databaseURL: "https://notes-react-6c629.firebaseio.com",
      projectId: "notes-react-6c629",
      storageBucket: "notes-react-6c629.appspot.com",
      messagingSenderId: "800430250484",
      appId: "1:800430250484:web:12f84c424e7db762bf01a1"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
  }

  firebase.auth().onAuthStateChanged((user) => {
    if (user === null) {
      setUserLoggedIn(false)
    } else {
      setUserLoggedIn(true)
    }
  });

  if (userLoggedIn) {
    return (
      <View style={styles.container}>
        <NotesScreenComponent />
      </View>
    );
  } else {
    return (
      <View style={styles.container}>
        <LoginScreenComponent />
      </View>
    );
  }
};

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flex: 1,
    backgroundColor: '#000',
    alignItems: 'center',
    justifyContent: 'center',
    margin: 0,
    padding: 0
  }
});
