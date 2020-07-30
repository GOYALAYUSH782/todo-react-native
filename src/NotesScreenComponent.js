import React, { useState } from 'react';
import { FlatList, View, StyleSheet } from 'react-native';
import SingleNoteSummaryComponent from "./SingleNoteSummaryComponent";
import CreateNoteComponent from "./CreateNoteComponent";

const styles = StyleSheet.create({
  container: {
    margin: 0,
    marginTop: 50,
    padding: 0
  }
});
// a react component is nothing but a javascript function

const NotesScreenComponent = () => {

  // to write javascript inside jsx, i need to enclose javascript code in {}
  // {name: 'abc', 'age': 12} -> {name} -> {name: 'abc'}
  // item , index

  const [data, setData] = useState([]);
  const addNewNote = (newNote, backgroundColor) => {
    setData([
      {
        date: new Date(),
        text: newNote,
        backgroundColor
      },
      ...data
    ])
  };

  return (
    <View style={styles.container}>
      <CreateNoteComponent
        addNewNote={addNewNote}
      />
      <FlatList
        showsVerticalScrollIndicator={false}
        data={data}
        numColumns={2}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) =>  // {item} bcz we are getting (item,index) but we need only item
          <SingleNoteSummaryComponent
            noteInfo={item}
          />
        }
      />
    </View>
  );
};

export default NotesScreenComponent;