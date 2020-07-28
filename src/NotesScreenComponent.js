import React from 'react';
import { FlatList, View, StyleSheet } from 'react-native';
import SingleNoteSummaryComponent from "./SingleNoteSummaryComponent";

const styles = StyleSheet.create({
  container: {
    margin: 0,
    marginTop: 50,
    padding: 0
  }
});
// a react component is nothing but a javascript function

const NotesScreenComponent = () => {

  const data = [
    { "date": "24-10-1998", "text": "I am going to Abohar" },
    { "date": "24-02-2002", "text": "I have to bring vegetables" },
    { "date": "24-02-2003", "text": "I have to bring vegetables" },
    { "date": "24-02-2004", "text": "I have to bring vegetables" },
    { "date": "24-03-2004", "text": "I have to bring vegetables" },
    { "date": "24-04-2004", "text": "I have to bring vegetables" },
    { "date": "24-04-2005", "text": "I have to bring vegetables" },
    { "date": "24-04-2006", "text": "I have to bring vegetables" },
    { "date": "24-04-2007", "text": "I have to bring vegetables" }
  ]
  // to write javascript inside jsx, i need to enclose javascript code in {}
  // {name: 'abc', 'age': 12} -> {name} -> {name: 'abc'}
  // item , index

  return (
    <View style={styles.container}>
      <FlatList
        showsVerticalScrollIndicator={false}
        data={data}
        numColumns={2}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) =>  // {item} bcz we are getting (item,index) but we need only item
          <SingleNoteSummaryComponent
            myNoteText={item}
          />
        }
      />
    </View>
  );
}

export default NotesScreenComponent;