import React, { useState } from 'react';
import { TextInput, StyleSheet, Button, View } from 'react-native';

const styles = StyleSheet.create({
  textInputStyles: {
    borderWidth: 2,
    width: 320,
    height: 100,
    borderRadius: 20,
    padding: 20,
    fontSize: 21
  }
});

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
          addNewNote(newNoteText);
          setNewNoteText('');
        }}
      />
    </View>
  );
};

export default CreateNoteComponent;