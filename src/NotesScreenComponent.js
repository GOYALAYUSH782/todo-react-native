import React, { useState, useEffect } from 'react';
import { FlatList, View, StyleSheet, Button } from 'react-native';
import SingleNoteSummaryComponent from "./SingleNoteSummaryComponent";
import CreateNoteComponent from "./CreateNoteComponent";
import firebase from "firebase";
import _ from "lodash";

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
  const signOut = () => {
    firebase
      .auth()
      .signOut();
  };

  const logegdInUserId = firebase.auth().currentUser.uid;
  const pathForData = `/users/${logegdInUserId}`;

  useEffect(() => {
    firebase
      .database()
      .ref(pathForData)
      .on('value', completeNewData => {
        const newDataList = _.map(completeNewData.val(), (value, key) => {
          return {
            ...value
          }
        })
        setData(newDataList);
      })
  }, []);

  return (
    <View style={styles.container}>
      <Button
        title={"Log Out"}
        onPress={() => signOut()}
      />
      <CreateNoteComponent />
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