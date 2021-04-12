import React, { useState } from "react";
import { useDispatch } from "react-redux";

import Button from "../components/AppButton";
import FormScreenWrapper from "../components/FormScreenWrapper";
import TextInput from "../components/AppTextInput";

import { addCardToDeck } from "../store/decksSlice";
import baseStyles from "../styles";

function AddCardScreen({ navigation, route }) {
  const [questionError, setQuestionError] = useState("");
  const [answerError, setAnswerError] = useState("");
  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState("");

  const dispatch = useDispatch();

  const handleSubmit = () => {
    setQuestionError("");
    setAnswerError("");
    if (!question) setQuestionError("A question is required");
    if (!answer) setAnswerError("An answer is required");

    if (question && answer) {
      dispatch(
        addCardToDeck({ title: route.params.name, card: { question, answer } })
      );
      navigation.goBack();
    }
  };

  return (
    <FormScreenWrapper>
      <TextInput
        error={questionError}
        label='Question'
        textArea
        onChangeText={setQuestion}
      />
      <TextInput
        error={answerError}
        label='Answer'
        textArea
        onChangeText={setAnswer}
      />
      <Button
        onPress={handleSubmit}
        style={{ backgroundColor: baseStyles.colors.green, marginTop: 40 }}
        title='Create Question'
      />
    </FormScreenWrapper>
  );
}

export default AddCardScreen;
