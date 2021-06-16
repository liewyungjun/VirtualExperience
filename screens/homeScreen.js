import * as React from 'react';
import { Text, View, Image } from 'react-native';


export default function HomeScreen() {
  return (
    <View style={{justifyContent:'center', alignItems:'center',}} >
      <Image source={require('../assets/logo.png')} />
    </View>
  );
}

