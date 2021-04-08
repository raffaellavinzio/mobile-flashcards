import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import CardNavigation from "./CardNavigation";
import AddDeckScreen from "../screens/AddDeckScreen";

import baseStyles from "../styles";

const Tab = createBottomTabNavigator();

function DeckNavigation() {
  return (
    <Tab.Navigator
      tabBarOptions={{
        activeBackgroundColor: baseStyles.colors.pink,
        activeTintColor: baseStyles.colors.dark,
        labelStyle: {
          fontSize: 20,
          margin: 0,
          padding: 10,
          textTransform: "uppercase",
        },
        inactiveBackgroundColor: baseStyles.colors.white,
        inactiveTintColor: "gray",
      }}
    >
      <Tab.Screen name='Decks' component={CardNavigation} />
      <Tab.Screen
        name='AddDeck'
        component={AddDeckScreen}
        options={{ title: "New Deck" }}
      />
    </Tab.Navigator>
  );
}

export default DeckNavigation;
