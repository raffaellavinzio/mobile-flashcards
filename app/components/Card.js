import React from "react";
import { StyleSheet, Text, TouchableWithoutFeedback, View } from "react-native";

import baseStyles from "../styles";

function Card({ item, onPress }) {
  const numCards = item.questions.length;
  
  return (
    <TouchableWithoutFeedback onPress={onPress}>
      <View style={styles.container}>
        <Text style={styles.title}>{item.title}</Text>
        {numCards === 1 ? (
          <Text style={styles.text}>{numCards} card</Text>
        ) : (
          <Text style={styles.text}>{numCards} cards</Text>
        )}
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    backgroundColor: baseStyles.colors.green,
    borderRadius: 10,
    flex: 1,
    justifyContent: "center",
    paddingVertical: 15,
  },
  text: {
    color: baseStyles.colors.dark,
    fontFamily: baseStyles.fontFamily,
    marginVertical: 5,
  },
  title: {
    color: baseStyles.colors.dark,
    fontFamily: baseStyles.fontFamily,
    fontSize: 20,
    fontWeight: "bold",
    textTransform: "uppercase",
  },
});

export default Card;
