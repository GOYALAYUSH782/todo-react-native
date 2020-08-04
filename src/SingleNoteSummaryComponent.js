import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

const styles = StyleSheet.create({
  textProperties: {
    fontSize: 24,
    fontWeight: "500",
    textAlign: "center",
    color: "#fff"
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
    textAlign: "left",
    color: "#fff"
  }
});

const SingleNoteSummaryComponent = ({ navigation, noteInfo }) => {
  return (
    <TouchableOpacity
      onPress={() => navigation.navigate('Notes', { noteInfo })}
    >
      <View backgroundColor={noteInfo.backgroundColor} style={styles.textViewStyle} >
        <Text style={styles.dateProperties}>{noteInfo.date}</Text>
        <Text
          style={styles.textProperties}>
          {noteInfo.text}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

export default SingleNoteSummaryComponent;