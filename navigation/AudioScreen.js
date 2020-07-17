import * as React from 'react';
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';
import { Audio } from 'expo-av';

// never actually got this to play sound
export default class AudioScreen extends React.Component {

  async componentDidMount() {
    const soundObject = new Audio.Sound();
    try {
      console.log('before')
      await soundObject.loadAsync(
        require('../assets/countDown.mp3'),
        { shouldPlay: true }
      );
      await soundObject.playAsync();
      console.log('after')
    } catch (err) {
      console.log('hi')
    }
  }

  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Start</Text>
      </View>
    );
  }
}
