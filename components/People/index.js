// import { createStackNavigator } from '@react-navigation/stack';
import React, {useState, useEffect} from 'react';
import {StyleSheet,Text,View, Modal, TouchableHighlight,ActivityIndicator,FlatList,Image,} from 'react-native'
import './styles.css';

import _ from 'lodash'

import Container from '../Container'
import HomeWorld from '../HomeWorld'

// const Stack = createStackNavigator()

const People = () => {
    const [data, setData] = useState([])
    const [loading, setLoading] = useState(true)
    const [modalVisible, setModalVisible] = useState(false)
    const [gender, setGender] = useState('all')
    const [pickerVisible, setPickerVisible] = useState(false)

    useEffect(() => {
        const api_end_point = "https://swapi.dev/api/people"

        fetch(api_end_point)
        .then(response => response.json())
        .then(json => {
            setData(json.results)
            setLoading( false )
            console.log({data}, {loading}, {json}, json.results)
        })
        .catch((err) => console.log('err:', err))
    }, [data, loading])

    return (
        <View style={styles.container}>
            <Text>People</Text>
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
export default People;