// import { createStackNavigator } from '@react-navigation/stack';
import React, {useState, useEffect} from 'react';
import {StyleSheet,Text,View, Modal, TouchableHighlight,ActivityIndicator,FlatList,Image,} from 'react-native'
// import {Picker} from '@react-native-picker/picker';
// import './styles.css';

import _ from 'lodash'

import Container from '../Container'
import HomeWorld from '../HomeWorld';
import { Picker } from '@react-native-picker/picker';


// const Stack = createStackNavigator()

const People = ({props}) => {
    const [data, setData] = useState([])
    const [loading, setLoading] = useState(true)
    const [modalVisible, setModalVisible] = useState(false)
    const [gender, setGender] = useState('all')
    const [pickerVisible, setPickerVisible] = useState(false)
    const [url, setUrl] = useState('')

    useEffect(() => {
        // if (!props.url) return
        // const url = props.url.replace('/^http:\/\/\i', 'https://')
        let isSubscribed = true
        const api_end_point = "https://swapi.dev/api/people"

        fetch(api_end_point)
        .then(response => response.json())
        .then(json => {
            // if(isSubscribed) {
            
                setData(json.results)
                setLoading( false )
            // }
            // console.log({data}, {loading}, {json}, json.results)
        })
        .catch((err) => console.log('err:', err))

        isSubscribed = false
        
    }, [data, loading, gender])

    const openHomeWorld = (url) => {
        
        setModalVisible(true)
        setUrl(url)
        console.log({modalVisible}, {url})
    }

    const closeModal = () => {
        setModalVisible(false)
    }

    const togglePicker = () => {
        setPickerVisible(!pickerVisible)
    }

    const filter = (gender) => {
        setGender(gender)
    }

    const renderItem = ({item}) => {
        // console.log(item)
        return(
            <View style={styles.itemContainer}>
                <Text style={styles.name}>{item.name}</Text>
                <Text style={styles.info}>Height: {item.height}</Text>
                <Text style={styles.info}>Birth Year: {item.birth_year}</Text>
                <Text style={styles.info}>Gender: {item.gender}</Text>
                <TouchableHighlight
                    style={styles.button}
                    onPress={() => openHomeWorld(item.homeworld)}>
                        <Text styles={styles.info}>View Home World</Text>
                </TouchableHighlight>
            </View>
        )
    }

    
    if ( gender !== 'all' ) {
        data.filter( (f) => f.gender === gender)
    }
    // console.log({gender})
    // console.log(dataTemp)
    return (


        <View style={styles.container}>
            <Modal
                onRequestClose={() => console.log("onrequest close called")}
                animationType="slide"
                visible={modalVisible}>
                    <HomeWorld closeModal={closeModal} url={url}/>
            </Modal>
            <TouchableHighlight 
                style={styles.pickerToggleContainer}
                onPress={togglePicker}>
                    <Text style={styles.pickerToggle}>
                        {pickerVisible ? 'CLose Filter' : 'Open Filter'}
                    </Text>
            </TouchableHighlight>
            {loading ?
            
                <ActivityIndicator color="#ffe81f"/> : 
            
                <FlatList
                    data={data}
                    keyExtractor={(item) => item.name}
                    renderItem={renderItem}
                />
            }
        
             {pickerVisible && 
             
                (
                    <View style={styles.pickerContainer}>
                        <Picker
                            style={{  backgroundColor: '#ffe81f' }}
                            onValueChange={(item) => filter(item)}
                            selectedValue={gender}
                            >
                                <Picker.Item itemstyle={{ color: 'yellow' }} label="All" value="all"></Picker.Item>
                                <Picker.Item itemstyle={{ color: 'yellow' }} label="Males" value="male"></Picker.Item>
                                <Picker.Item itemstyle={{ color: 'yellow' }} label="Females" value="female"></Picker.Item>
                                <Picker.Item itemstyle={{ color: 'yellow' }} label="Others" value="n/a"></Picker.Item>
                        </Picker>

                    </View>
                )

             }
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
    //   flex: 1,
      backgroundColor: '#000',
      alignItems: 'center',
      justifyContent: 'center',
    },
    pickerToggleContainer: {
        padding: 25,
        justifyContent: 'center',
        alignItems: 'center'
    },
    pickerToggle: {
        color: "#ffe81f"
    },
    pickerContainer: {
        position: 'absolute',
        bottom: 0,
        right: 0,
        left: 0, height: 20
    }, 
    itemContainer: {
        padding: 15,
        borderBottomWidth: 1,
        borderBottomColor: '#ffe81f'
    },
    name: {
        color: '#ffe81f',
        fontSize: 18
    }, 
    info: {
        color: '#ffe81f',
        fontSize: 14,
        marginTop: 5
    },
    button: {
        margin: 5,
        padding: 10,
        backgroundColor: "#fac826"
    }
  });
export default People;