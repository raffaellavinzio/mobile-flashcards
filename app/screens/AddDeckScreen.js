import React, { useState } from "react";
import { StyleSheet, Text } from "react-native";
import { useDispatch } from "react-redux";

import Button from "../components/AppButton";
import FormScreenWrapper from "../components/FormScreenWrapper";
import TextInput from "../components/AppTextInput";

import { addDeckTitle } from "../store/decksSlice";
import baseStyles from "../styles";

function AddDeckScreen({ navigation }) {
  const [error, setError] = useState("");
  const [title, setTitle] = useState("");

  const dispatch = useDispatch();

  const handleSubmit = () => {
    setError("");
    if (!title) return setError("A title is required");

    dispatch(addDeckTitle(title));
    navigation.navigate("Deck", { name: title });
  };

  return (
    <FormScreenWrapper>
      <Text style={styles.title}>What is the title of your new deck?</Text>
      <TextInput error={error} onChangeText={setTitle} />
      <Button
        onPress={handleSubmit}
        style={{ backgroundColor: baseStyles.colors.green, marginTop: 40 }}
        title='Create Deck'
      />
    </FormScreenWrapper>
  );
}

const styles = StyleSheet.create({
  title: {
    color: baseStyles.colors.dark,
    fontSize: 40,
    textAlign: "center",
    textTransform: "uppercase",
    width: "90%",
  },
});

export default AddDeckScreen;
