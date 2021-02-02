// import { createStackNavigator } from '@react-navigation/stack';
import React, {useState, useEffect} from 'react';
import { StyleSheet, Text, View, ActivityIndicator } from 'react-native';
// import HomeWorld from './HomeWorld';
// import './styles.css';



// const Stack = createStackNavigator()

const HomeWorld = (props) => {
    const [data, setData] = useState({})
    const [loading, setLoading] = useState(true)

    useEffect(() => {
      let url = props.url
      console.log(url)
      url = url.replace('/^http:\/\/\i', 'https://')
      
      fetch(url)
        .then( response => response.json() )
        .then((json) => {
          if(json) {
            setLoading(false)
            setData(json)
          }
        })
        .catch((err) => console.log('err:', err))
    }, [])

    const TextContainer = ({label, info}) => {
      return (
        <Text style={styles.text}>{label}: {info}</Text>
      )
    }

    // const dataTemp = data

    return (
        <View style={styles.container}>
            {loading ? <ActivityIndicator color="#ffe81f"/> : (
              <View style={styles.HomeWorldInfoContainer}>
                <TextContainer label="Name" info={data.name}/>
                <TextContainer label="Population" info={data.population}/>
                <TextContainer label="Climate" info={data.climate}/>
                <TextContainer label="Terrain" info={data.terrain}/>
                <TextContainer label="Diameter" info={data.diameter}/>
                <TextContainer label="Gravity" info={data.gravity}/>
                <Text 
                  style={styles.closeButton}
                  onPress={() => props.closeModal()}>
                  Close Modal
                </Text>
              </View>
            )
          }
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#000',
      alignItems: 'center',
      justifyContent: 'center',
    },
    HomeWorldInfoContainer: {
      padding: 20
    },
    text: {
      color: "#ffef18"
    },
    closeButton: {
      paddingTop: 20,
      color: 'black',
      fontSize: 14,
      backgroundColor: "white"
    }
  });
export default HomeWorld;