import React, { useEffect } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { PersistGate } from "redux-persist/integration/react";
import { Provider } from "react-redux";

import DeckNavigator from "./app/navigation/DeckNavigator";

import { getNotificationPermissions, setDailyNotifications } from "./app/notifications";
import { persistor, store } from "./app/store/store";

export default function App() {
  useEffect(() => {
    getNotificationPermissions();
    setDailyNotifications();
  }, []);

  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <NavigationContainer>
          <DeckNavigator />
        </NavigationContainer>
      </PersistGate>
    </Provider>
  );
}
