import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { removeDeck } from "../store/decksSlice";

import Button from "../components/AppButton";

import baseStyles from "../styles";

function DeckScreen({ navigation, route }) {
  const dispatch = useDispatch();
  const { title, questions } =
    useSelector(state => state.decks[route.params.name]) || {};

  if (!title) return null;
  const numCards = questions.length;

  const handleRemoveDeck = () => {
    dispatch(removeDeck(title));
    navigation.goBack();
  };

  if (numCards === 0) {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>Sorry, there are no cards in this deck!</Text>
        <Button
          style={{ backgroundColor: baseStyles.colors.pink }}
          onPress={() => navigation.navigate("AddCard", { name: `${title}` })}
          title='Add Card'
        />
        <Text style={styles.btnLink} onPress={handleRemoveDeck}>
          Delete Deck
        </Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <View style={styles.deckInfo}>
        <Text style={styles.title}>{title}</Text>
        {numCards === 1 ? (
          <Text style={styles.text}>{numCards} card</Text>
        ) : (
          <Text style={styles.text}>{numCards} cards</Text>
        )}
      </View>
      <View style={styles.btnsWrapper}>
        <Button
          style={{ backgroundColor: baseStyles.colors.pink }}
          onPress={() => navigation.navigate("AddCard", { name: `${title}` })}
          title='Add Card'
        />
        <Button
          style={{ backgroundColor: baseStyles.colors.darkGreen }}
          onPress={() => navigation.navigate("Quiz", { name: `${title}` })}
          title='Start Quiz'
        />
        <Text style={styles.btnLink} onPress={handleRemoveDeck}>
          Delete Deck
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  btnLink: {
    color: baseStyles.colors.dark,
    fontFamily: baseStyles.fonts.fontFamily,
    fontStyle: "italic",
    marginTop: 30,
    textDecorationColor: baseStyles.colors.dark,
    textDecorationLine: "underline",
    textDecorationStyle: "solid",
  },
  btnsWrapper: {
    marginTop: 40,
    alignItems: "center",
  },
  container: {
    alignItems: "center",
    backgroundColor: baseStyles.colors.lightPink,
    flex: 1,
    justifyContent: "center",
    paddingTop: baseStyles.screenPaddingTop,
  },
  deckInfo: {
    alignItems: "center",
  },
  text: {
    color: baseStyles.colors.dark,
    fontFamily: baseStyles.fonts.fontFamily,
    fontSize: 20,
    marginVertical: 5,
    padding: 10,
  },
  title: {
    color: baseStyles.colors.dark,
    fontFamily: baseStyles.fonts.fontFamily,
    fontSize: 50,
    textTransform: "uppercase",
    textAlign: "center",
  },
});

export default DeckScreen;
