import React, { useState } from 'react';
import { TextInput, StyleSheet, Button, View } from 'react-native';

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

const CreateNoteComponent = (props) => {
  const [newNoteText, setNewNoteText] = useState("");
  const { addNewNote } = props;

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
          addNewNote(newNoteText, randomBackground());
          setNewNoteText('');
        }}
      />
    </View>
  );
};

export default CreateNoteComponent;