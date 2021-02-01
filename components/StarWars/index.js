// import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import { FlatList, StyleSheet, Text, TouchableHighlight, View } from 'react-native';
// import styles from './styles.js';

// links
const links = [
    { title: "People" },
    { title: "Films" },
    { title: "StarShips" },
    { title: "Vehicles" },
    { title: "Planets" },
]

const HeaderTitle = () => {

    return (
        <Text style={{fontSize: 34, color: '255, 232, 31'}}>Star Wars</Text>
    )
}

const RenderItem = ({item}) => {
    console.log(item.item.title)
    return (
        
            <Text style={styles.text}>{item.item.title}</Text>
        
            
    )
}

const StarWars = ({navigation}) => {
    return (
        <View style={styles.container}>
            
            <FlatList
                data={links}
                keyExtractor={(item) => item.title}
                renderItem={ (item, index) => 
                    <TouchableHighlight
                        onPress={() => navigation.navigate(item.item.title)}
                        // onPress={() => alert(item.item.title)}
                        style={[styles.item, {borderTopWidth: index === 0 ? 1 : null}]}>
                            <RenderItem item={item}></RenderItem>
                    </TouchableHighlight>}>
            </FlatList>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#000',
    //   alignItems: 'center',
      justifyContent: 'center',
    },
    text: {
      color: "#ffe81f",
      fontSize: 18  
    },
    item: {
        padding: 20,
        justifyContent: 'center',
        borderColor: 'rgba(255,232,31, 0.2)',
        borderBottomWidth: 1
    }
  });
export default StarWars;