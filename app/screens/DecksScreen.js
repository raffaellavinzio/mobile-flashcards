import React from "react";
import { FlatList, StyleSheet, Text, View } from "react-native";
import { useSelector } from "react-redux";

import Card from "../components/Card";

import baseStyles from "../styles";

function DecksScreen({ navigation }) {
  let decks = useSelector(state => Object.values(state.decks));

  const renderItem = ({ item }) => (
    <Card
      item={item}
      onPress={() => navigation.navigate("Deck", { name: item.title })}
    />
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={decks}
        ItemSeparatorComponent={() => <View style={styles.separator} />}
        keyExtractor={item => item.title}
        renderItem={renderItem}
        style={styles.list}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: baseStyles.colors.lightPink,
    flex: 1,
    justifyContent: "center",
    paddingTop: baseStyles.screenPaddingTop,
  },
  list: {
    paddingHorizontal: 20,
    paddingVertical: 40,
  },
  separator: {
    height: 10,
    width: "100%",
  },
});

export default DecksScreen;
