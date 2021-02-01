// import { createStackNavigator } from '@react-navigation/stack';
import React, {useState, useEffect} from 'react';
import {StyleSheet,Text,View, Modal, TouchableHighlight,ActivityIndicator,FlatList,Image,} from 'react-native'
import './styles.css';

import _ from 'lodash'

import Container from './Container'
import HomeWorld from './HomeWorld'

// const Stack = createStackNavigator()

const HomeWorld = () => {

    return (
        <View style={styles.container}>
            <Text>HomeWorld</Text>
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
export default HomeWorld;