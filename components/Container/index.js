// import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import {StyleSheet,Text,View} from 'react-native'
// import styles from './styles.js';


// const Stack = createStackNavigator()

const Container = () => {
    return (
        <View style={styles.container}>
            <Text>Container</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });
export default Container;