import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

const styles = StyleSheet.create({
  textProperties: {
    fontSize: 36,
    fontWeight: "500",
    textAlign: "center",
    color: "#fff"
  },
  textViewStyle: {
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#000",
    height: 700,
  },
  dateProperties: {
    fontSize: 20,
    color: "#fff"
  }
});

const NoteComponent = ({ route, navigation }) => {
  const { noteInfo } = route.params;

  return (
    <View style={styles.textViewStyle} >
      <Text style={styles.dateProperties}>{noteInfo.date}</Text>
      <Text
        style={styles.textProperties}>
        {noteInfo.text}
      </Text>
      <Button
        title={"Home"}
        onPress={() => navigation.navigate('Home')}
      />
    </View>
  );
};

export default NoteComponent;