import React from "react";
import { NavigationContainer } from "@react-navigation/native";

import DeckNavigation from "./app/navigation/DeckNavigation";

export default function App() {
  return (
    <NavigationContainer>
      <DeckNavigation />
    </NavigationContainer>
  );
}
