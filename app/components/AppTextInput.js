import React from "react";
import { StyleSheet, Text, TextInput } from "react-native";

import baseStyles from "../styles";

function AppTextInput({ error, label = "", textArea = false, onChangeText }) {
  return (
    <>
      <Text style={styles.label}>{label}</Text>
      <TextInput
        onChangeText={onChangeText}
        style={[styles.textInput, { height: textArea ? 150 : 50 }]}
        multiline={textArea}
        numberOfLines={textArea ? 4 : 1}
      />
      {error ? <Text style={styles.error}>{error}</Text> : null}
    </>
  );
}

const styles = StyleSheet.create({
  error: {
    color: "darkred",
  },
  label: {
    alignSelf: 'flex-start',
    fontFamily: baseStyles.fonts.fontFamily,
    fontSize: 16,
    marginTop: 10,
    paddingHorizontal: '12%',
  },
  textInput: {
    backgroundColor: baseStyles.colors.white,
    borderColor: baseStyles.colors.darkGreen,
    borderRadius: 10,
    borderWidth: 2,
    fontFamily: baseStyles.fonts.fontFamily,
    fontSize: 20,
    fontStyle: "italic",
    marginBottom: 10,
    paddingHorizontal: 10,
    textAlign: "center",
    width: "80%",
  },
});

export default AppTextInput;
