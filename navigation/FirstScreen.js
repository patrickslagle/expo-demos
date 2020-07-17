import React from 'react';
import {
  View,
  StyleSheet,
  Button,
} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

const FirstScreen = ({ navigation }) => (
  <View style={styles.container}>
    <Button
      title="Welcome Screen"
      onPress={() => navigation.navigate('WelcomeScreen')}
    />
    <Button
      title="Second Screen"
      onPress={() => navigation.navigate('SecondScreen')}
    />
  </View>
)

export default FirstScreen;