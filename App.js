import { createStackNavigator } from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native'
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Container from './components/Container';
import People from './components/People';
import StarWars from './components/StarWars';

const Stack = createStackNavigator()

const StackContainer = () => {

  return (
    <Stack.Navigator >
      <Stack.Screen name="StarWars" component={StarWars} />   
      <Stack.Screen name="People" component={People} />
    </Stack.Navigator>
  )
}

function App() {
  return (
      <NavigationContainer>
        <StackContainer></StackContainer>
      </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    alignItems: 'center',
    justifyContent: 'center',
  },
});


export default App;