import * as React from 'react';
import { ImageBackground, StyleSheet, Text, View,TouchableOpacity } from "react-native";


export default function planetInfo() {
  return (
    <View>
      <ImageBackground source={require('../../assets/planetpic.webp')} style={styles.background} imageStyle={{opacity: 0.3}}>
      <Text style={styles.text}>Want to learn more about the global plastic pollution crisis and its impact on our environment? Join our Museum Ambassador, Diona, on a virtual tour through our new Planet or Plastic? exhibition. Look at how some of these impactful photographs and infographics will leave you feeling informed about this generation defining issue and ready to make the choice on what to prioritise - planet or plastic? </Text>
      <TouchableOpacity style={styles.tourLink}>
          <Text style={{fontWeight:'bold', color:'white',}}>Virtual Tour Here !</Text>
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