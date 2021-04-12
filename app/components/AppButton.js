import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

import baseStyles from "../styles";

function AppButton({ onPress, style, title }) {
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={[styles.container, style]}>
        <Text style={styles.text}>{title}</Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    borderRadius: 10,
    justifyContent: "center",
    marginTop: 10,
    width: 200,
  },
  text: {
    color: baseStyles.colors.dark,
    fontSize: 16,
    paddingHorizontal: 20,
    paddingVertical: 15,
    textTransform: "uppercase",
  },
});

export default AppButton;
