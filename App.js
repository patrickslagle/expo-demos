import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import {
  View,
  StyleSheet,
  Button,
} from 'react-native';

// navigation screens
import SecondScreen from './navigation/SecondScreen.js';
import FirstScreen from './navigation/FirstScreen.js';
import AudioScreen from './navigation/AudioScreen.js'
import WelcomeScreen from './navigation/WelcomeScreen.js';
import NotificationScreen from './navigation/NotificationScreen.js';


const Stack = createStackNavigator();

const App = () => (
  <NavigationContainer>
    <Stack.Navigator>
      <Stack.Screen name="WelcomeScreen" component={WelcomeScreen} />
      <Stack.Screen name="NotificationScreen" component={NotificationScreen} />
      <Stack.Screen name="SecondScreen" component={SecondScreen} />
      <Stack.Screen name="AudioScreen" component={AudioScreen} />
      <Stack.Screen name="FirstScreen" component={FirstScreen} />
    </Stack.Navigator>
  </NavigationContainer>
)

export default App;

