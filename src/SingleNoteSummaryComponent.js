import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  textProperties: {
    fontSize: 24,
    fontWeight: "500",
    textAlign: "center"
  },
  textViewStyle: {
    width: 150,
    height: 150,
    margin: 7,
    padding: 5,
    borderRadius: 30,
    alignItems: "center",
    justifyContent: "center"
  },
  dateProperties: {
    fontSize: 12,
    textAlign: "left"
  }
});

const randomBackground = () => {
  var red = Math.floor(Math.random() * 255); // 123
  var green = Math.floor(Math.random() * 255); // 45
  var blue = Math.floor(Math.random() * 255); // 43

  // String Interpolation
  // In a string -> isnert a value of some other data type
  // ""  ''  ``

  return `rgb(${red}, ${green}, ${blue})`; // rgb(123, 45, 43)
};

const SingleNoteSummaryComponent = (props) => {
  const { myNoteText } = props;
  return (
    <View backgroundColor={randomBackground()} style={styles.textViewStyle} >
      <Text style={styles.dateProperties}>{myNoteText.date.toDateString()}</Text>
      <Text
        style={styles.textProperties}>
        {myNoteText.text}
      </Text>
    </View>
  );
};

export default SingleNoteSummaryComponent;