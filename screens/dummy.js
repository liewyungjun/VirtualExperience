import * as React from 'react';
import { Text, TouchableOpacity, View, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';


function dummy({navigation}) {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>The User Page goes Here!</Text>
    </View>
  );
}

const Stack = createStackNavigator();

export default function dummyStack(){
  return(
      <Stack.Navigator>
        <Stack.Screen name='User' component={dummy}/>
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