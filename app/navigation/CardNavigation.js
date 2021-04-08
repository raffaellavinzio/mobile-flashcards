import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import DecksScreen from "../screens/DecksScreen";
import DeckScreen from "../screens/DeckScreen";
import AddCardScreen from "../screens/AddCardScreen";
import QuizScreen from "../screens/QuizScreen";

import baseStyles from "../styles";

const Stack = createStackNavigator();

function CardNavigation() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: baseStyles.colors.white,
        },
        headerTintColor: baseStyles.colors.dark,
        headerTitleAlign: "center",
        headerTitleStyle: {
          fontSize: 20,
          textTransform: "uppercase",
          textAlign: "center",
        },
      }}
    >
      <Stack.Screen name='Decks' component={DecksScreen} />
      <Stack.Screen
        name='Deck'
        component={DeckScreen}
        options={({ route }) => ({ title: route.params.name })}
      />
      <Stack.Screen
        name='AddCard'
        component={AddCardScreen}
        options={{ title: "Add Card" }}
      />
      <Stack.Screen name='Quiz' component={QuizScreen} />
    </Stack.Navigator>
  );
}

export default CardNavigation;
