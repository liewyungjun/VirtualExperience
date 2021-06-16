import * as React from 'react';
import { Text, TouchableOpacity, View, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import philatelicinfo from './infopages/philatelicMuseum';
import planetInfo from './infopages/planet';

function dummy({navigation}) {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>The List goes Here!</Text>
      <TouchableOpacity style={styles.tourLink} onPress={()=>navigation.navigate('Singapore Philatelic Museum')}>
          <Text style={{fontWeight:'bold', color:'white',}}>Singapore Philatelic Museum</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.tourLink} onPress={()=>navigation.navigate('Planet or Plastic?')}>
          <Text style={{fontWeight:'bold', color:'white',}}>Planet or Plastic?</Text>
      </TouchableOpacity>
    </View>
  );
}

const Stack = createStackNavigator();

export default function dummyStack(){
  return(
      <Stack.Navigator>
        <Stack.Screen name='List' component={dummy}/>
        <Stack.Screen name='Singapore Philatelic Museum' component={philatelicinfo}/>
        <Stack.Screen name='Planet or Plastic?' component={planetInfo}/>
      </Stack.Navigator>
  )
}


const styles = StyleSheet.create({
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