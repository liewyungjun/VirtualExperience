import React, {useEffect} from 'react';
import { ImageBackground, StyleSheet, Text, View,TouchableOpacity, Linking } from "react-native";
import { FontAwesome } from '@expo/vector-icons';

export default function philatelicinfo({navigation}) {
  useEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <TouchableOpacity style={{margin:20,}}   >
          <FontAwesome name="star-o" size={24} color="black" />
        </TouchableOpacity>
      ),
    });
  });
  return (
    <View>
      <ImageBackground source={require('../../assets/philatelicmuseum.jpg')} style={styles.background} imageStyle={{opacity: 0.2}}>
      <Text style={styles.text}>Singapore Philatelic Museum is the custodian and curator of Singapore's treasure of philatelic materials. The museum collections range from stamps and archival philatelic material of Singapore from the 1830s to present day, and stamps from member countries of the Universal Postal Union. </Text>
      <TouchableOpacity style={styles.tourLink} onPress={() => {
          Linking.openURL('https://www.nhb.gov.sg/spm/who-we-are/resources/virtual-tours')
          .catch(err => {
              console.error("Failed opening page because: ", err)
              alert('Failed to open page')})}}>
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