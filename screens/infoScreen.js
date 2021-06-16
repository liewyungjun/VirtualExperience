import React, { useEffect } from 'react';
import { ImageBackground, StyleSheet, Text, View,TouchableOpacity, Linking } from "react-native";
import { FontAwesome } from '@expo/vector-icons';
import data from '../data.js'

export default function planetInfo({ route, navigation, likes, likeTour }) {
  const { id, title } = route.params;
  const tour = data[id]

  useEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <TouchableOpacity style={{margin: 20,}} onPress={() => likeTour(id)}>
          <FontAwesome
            name={likes.includes(id) ? "star" : "star-o"}
            size={24}
            color="black" 
          />
        </TouchableOpacity>
      ),
    });
  })

  return (
    <View style={{flex: 1}}>
      <ImageBackground source={tour.image} style={styles.background} imageStyle={{opacity: 0.3}}>
      <Text style={styles.text}>{tour.description}</Text>
      <TouchableOpacity style={styles.tourLink} onPress={() => {
                Linking.openURL(tour.link)
                .catch(err => {
                    console.error("Failed opening page because: ", err)
                    alert('Failed to open page')})}}>
          <Text style={{fontWeight:'bold', color:'white',}}>Virtual Tour Here!</Text>
      </TouchableOpacity>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
    background :{
        height:'100%',
        width:'100%',
        alignItems:'center',
        justifyContent:'center',
    },
    text :{
      fontWeight:'bold',
      fontSize:20,
      opacity:1,
      color:'black',
      margin:20,
    },
    tourLink :{
      marginTop:20,
      width: 142,
      height: 32,
      backgroundColor: '#7556A9',
      borderRadius: 5,
      alignItems:'center',
      justifyContent:'center',
    }
})