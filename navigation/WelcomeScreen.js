import React from 'react';
import {
  View,
  StyleSheet,
  Button,
} from 'react-native';

const WelcomeScreen = ({ navigation }) => (
  <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
    <Button
      title="Go to First"
      onPress={() => navigation.navigate('FirstScreen')}
    />
    <Button
      title="Go to Navigations"
      onPress={() => navigation.navigate('NotificationScreen')}
    />
    <Button
      title="Go to Audio"
      onPress={() => navigation.navigate('AudioScreen')}
    />
  </View>
)

export default WelcomeScreen;
