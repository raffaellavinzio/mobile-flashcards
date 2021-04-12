import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { useSelector } from "react-redux";

import Button from "../components/AppButton";

import baseStyles from "../styles";
import { rescheduleDailyNotifications } from "../notifications";

function QuizScreen({ navigation, route }) {
  const randomPickNextCard = () => {
    const randomIndex = Math.floor(Math.random() * cardsLeft.length);
    const nextCard = cardsLeft[randomIndex];
    cardsLeft.splice(randomIndex, 1);
    return nextCard;
  };

  const cards =
    useSelector(state => state.decks[route.params.name].questions) || [];
  const numCards = cards.length;
  let cardsLeft = cards.slice(0);
  [card, setCard] = useState(randomPickNextCard());
  [numCorrect, setNumCorrect] = useState(0);
  [numLeft, setNumLeft] = useState(numCards);
  [toggleCard, setToggleCard] = useState(false);
  [quizComplete, setQuizComplete] = useState(false);
  [quizCount, setQuizCount] = useState(1);

  const handleCardComplete = score => {
    setNumCorrect(numCorrect + score);
    setNumLeft(numLeft - 1);
    if (numLeft === 1) setQuizComplete(true);
    setCard(randomPickNextCard());
    setToggleCard(false);
  };

  const handleRestartQuiz = () => {
    cardsLeft = cards.slice(0);
    setNumLeft(numCards);
    setNumCorrect(0);
    setQuizComplete(false);
    setCard(randomPickNextCard());
    setQuizCount(quizCount + 1);
    if (quizCount === 1) rescheduleDailyNotifications();
  };

  if (quizComplete)
    return (
      <View style={styles.container}>
        <Text style={[styles.text, styles.quizInfo]}>
          You scored {(numCorrect / numCards) * 100}%
        </Text>
        <Button
          style={{
            backgroundColor: baseStyles.colors.darkGreen,
            marginTop: 80,
          }}
          onPress={handleRestartQuiz}
          title='Restart Quiz'
        />
        <Button
          style={{ backgroundColor: baseStyles.colors.pink }}
          onPress={() => navigation.goBack()}
          title='Back To Deck'
        />
      </View>
    );

  return (
    <View style={styles.container}>
      <Text style={[styles.text, styles.quizInfo]}>
        {numLeft} out of {numCards} cards left
      </Text>
      {toggleCard ? (
        <>
          <Text style={styles.text}>{card.answer}</Text>
          <Text style={styles.btnLink} onPress={() => setToggleCard(s => !s)}>
            Show Question
          </Text>
        </>
      ) : (
        <>
          <Text style={styles.text}>{card.question}</Text>
          <Text style={styles.btnLink} onPress={() => setToggleCard(s => !s)}>
            Show Answer
          </Text>
        </>
      )}
      <View style={styles.btnsWrapper}>
        <Button
          style={{ backgroundColor: "lightgreen", width: 130, marginRight: 10 }}
          onPress={() => handleCardComplete(1)}
          title='Correct'
        />
        <Button
          style={{ backgroundColor: "lightcoral", width: 130 }}
          onPress={() => handleCardComplete(0)}
          title='Incorrect'
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  btnLink: {
    color: baseStyles.colors.dark,
    fontStyle: "italic",
    marginTop: 30,
    textDecorationColor: baseStyles.colors.dark,
    textDecorationLine: "underline",
    textDecorationStyle: "solid",
  },
  btnsWrapper: {
    alignItems: "center",
    flexDirection: "row",
    marginTop: 40,
  },
  container: {
    alignItems: "center",
    backgroundColor: baseStyles.colors.lightPink,
    flex: 1,
    justifyContent: "center",
    paddingTop: baseStyles.screenPaddingTop,
  },
  text: {
    fontSize: 30,
    textAlign: "center",
    width: "80%",
  },
  quizInfo: {
    fontSize: 20,
    fontStyle: "italic",
    marginBottom: 80,
  },
});

export default QuizScreen;
