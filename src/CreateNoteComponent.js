import React, { useState } from 'react';
import { TextInput, StyleSheet, Button, View } from 'react-native';
import firebase from "firebase";

const styles = StyleSheet.create({
  textInputStyles: {
    borderWidth: 2,
    width: 320,
    height: 100,
    borderRadius: 20,
    padding: 20,
    fontSize: 21,
    backgroundColor: "#fff"
  }
});

const randomBackground = () => {
  const red = Math.floor(Math.random() * 255); // 123
  const green = Math.floor(Math.random() * 255); // 45
  const blue = Math.floor(Math.random() * 255); // 43

  // String Interpolation
  // In a string -> isnert a value of some other data type
  // ""  ''  ``

  return `rgb(${red}, ${green}, ${blue})`; // rgb(123, 45, 43)
};

const CreateNoteComponent = () => {
  const [newNoteText, setNewNoteText] = useState("");
  const storeUserNotesDataOnFirebase = () => {
    const logegdInUserId = firebase.auth().currentUser.uid;
    const pathForData = `/users/${logegdInUserId}`;

    firebase
      .database()
      .ref(pathForData)
      .push({
        date: new Date().toDateString(),
        text: newNoteText,
        backgroundColor: randomBackground()
      })
  };

  return (
    <View>
      <TextInput
        style={styles.textInputStyles}
        autoCapitalize="none"
        autoCorrect={false}
        multiline={true}
        value={newNoteText}
        enablesReturnKeyAutomatically={true}
        onChangeText={newText => setNewNoteText(newText)}
        placeholder={"Please add a note ..."}
      />
      <Button
        title={"Create Note"}
        onPress={() => {
          // store the text on firebase
          if (newNoteText !== '') {
            storeUserNotesDataOnFirebase();
            setNewNoteText('');
          }
        }}
      />
    </View>
  );
};

export default CreateNoteComponent;