# Mobile Flashcards

This project is a mobile application for both Android and iOS that allows users to study collections of flashcards. The app allows users to create different categories of flashcards called "decks", add flashcards to those decks, then take quizzes on those decks.

## App details

- Users can create a deck which can hold an unlimited number of cards
- Users can add a card to a specific deck
- The front of the card displays the question
- The back of the card displays the answer
- Users can quiz themselves on a specific deck and receive a score once they're done
- Users receive a notification to remind themselves to study if they haven't already for that day


## Start the App

I built the app with create-react-native-app and used yarn to install the packages.

* Git clone the repo and then run the following commands:
    - `cd mobile-flashcards`
    - `yarn install`
    - `expo start`


## Development Approach
I adopted Redux recommended best practice using @reduxjs/toolkit and used AsyncStorage to persist the store locally.
