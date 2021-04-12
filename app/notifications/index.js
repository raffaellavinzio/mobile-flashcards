import * as Permissions from "expo-permissions";
import * as Notifications from "expo-notifications";

const notificationHour = 18;

const isQuizCompletedBeforeNotificationTime = () => {
  return new Date().getHours() < notificationHour;
};

const timeToNextDayTriggerInSeconds = () => {
  const today = new Date();

  const tomorrow = new Date(today);
  tomorrow.setDate(tomorrow.getDate() + 1);
  tomorrow.setHours(notificationHour, 0, 0, 0);

  return (tomorrow.getTime() - today.getTime()) / 1000;
};

export const getNotificationPermissions = async () => {
  const { status } = await Permissions.getAsync(Permissions.NOTIFICATIONS);
  if (status !== "granted") {
    alert(
      "Uh Oh.. looks like notifications for Mobile Flashcards are not enabled yet!"
    );
  }
};

export const setDailyNotifications = async () => {
  await Notifications.cancelAllScheduledNotificationsAsync();

  Notifications.setNotificationHandler({
    handleNotification: async () => ({
      shouldShowAlert: true,
      shouldPlaySound: true,
      shouldSetBadge: false,
    }),
  });

  return await Notifications.scheduleNotificationAsync({
    content: {
      title: "Flashcards",
      body: "Take your daily quiz!",
    },
    trigger: {
      hour: notificationHour,
      minute: 0,
      repeats: true,
    },
  });
};

export const rescheduleDailyNotifications = async () => {
  if (isQuizCompletedBeforeNotificationTime()) {

    const scheduledNotificationsArray = await Notifications.getAllScheduledNotificationsAsync();
    const nextNotificationId = scheduledNotificationsArray[0].identifier;
    await Notifications.cancelScheduledNotificationAsync(nextNotificationId);

    return await Notifications.scheduleNotificationAsync({
      content: {
        title: "Flashcards",
        body: "Take your daily quiz!",
      },
      trigger: {
        seconds: timeToNextDayTriggerInSeconds(),
        repeats: true,
      },
    });
  }
};
