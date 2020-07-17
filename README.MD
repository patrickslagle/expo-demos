There's EXPO and vanilla react native that needs xcode

expo init is actually the best way of starting from scratch. Just make sure that you are using compatible and up to date react-native, expo, expo-cli

Expo comes with a lot of things, including push notifications, payments, etc

The push notifications use the Expo API. You basically get a token, and then send that to Expo. If the app is in the background, you'll get the alert, but you can't handle it (user can click the notification though) https://forums.expo.io/t/expo-push-notifications-in-background/4710