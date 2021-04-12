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

- Git clone the repo and then run the following commands:
  - `cd mobile-flashcards`
  - `yarn install`
  - `expo start`

## Development Approach

### Redux and AsyncStorage Store

I adopted Redux recommended best practice using @reduxjs/toolkit and AsyncStorage to persist the store locally with redux-persist.
The store has a single slice object named **decks** initialized with the seed from the **data** folder.

### Local State

I kept the state local whenever it affected a single screen with no side effects and no need for sharing it with other screens:

- both forms view have local state
- the quiz view has local state to enable the quiz logic

### Notifications

To build the local notifications system I used `expo-notifications` and `expo-permissions`. In particular the daily notifications are scheduled with the method `scheduleNotificationAsync` with two `NotificationRequestInput` types:

- at the app start I used the `DailyTriggerInput` to schedule a notification every day at 18:00PM
- while at the quiz restart I skipped the notification for the day and rescheduled it to restart from the next day at the same time with `TimeIntervalTriggerInput`.

The notifications are sent only if the user does not complete any quiz by 18:00PM. After any rescheduling if the app is not restarted or no quizzes are completed the notification trigger time will start to vary day by day according to the elapsed time `next day 18PM - time the quiz was completed` in seconds. This is the closest solution I could come up with for having daily set time notifications considering the limitations of the current expo API.

## Test

I developed and tested the app on Android Studio emulator Pixel 3a API 29. I tested it also on Apple iPad Mini 4 and Samsung S21 phone.
I was able to test notifications on Android emulator and phone, did not test them on IOS.
