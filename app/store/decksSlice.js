import { createSlice } from "@reduxjs/toolkit";
import data from "../data";

const decksSlice = createSlice({
  name: "decks",
  initialState: data,
  reducers: {
    addCardToDeck(state, action) {
      const { title, card } = action.payload;
      state[title].questions.push(card);
    },
    addDeckTitle(state, action) {
      const title = action.payload;
      state[title] = { title, questions: [] };
    },
    removeDeck(state, action) {
      const title = action.payload;
      delete state[title];
    },
  },
});

export const { addCardToDeck, addDeckTitle, removeDeck } = decksSlice.actions;

export default decksSlice.reducer;
