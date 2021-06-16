import * as React from 'react';
import { Text, TouchableOpacity, View, StyleSheet, FlatList, Dimensions } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import philatelicinfo from './infopages/philatelicMuseum';
import planetInfo from './infopages/planet';

const DATA = [
    {
      id: '0',
      title: 'Singapore Philatelic Museum',
    },
    {
      id: '1',
      title: 'Planet or Plastic?',
    },
    {
      id: '2',
      title: 'Third Item',
    },
  ];


function listScreen({navigation}) {
  function renderItem  ({ item }) {
      
      return (
        <View>
        <TouchableOpacity style={styles.tourLink} onPress={()=>{navigation.navigate(item.title)}}>
          <Text style={{fontWeight:'bold', color:'white',}}>{item.title}</Text>
      </TouchableOpacity>    
    </View>)
  };
  return (
    <View style={{flex:1, color:'black'}}>
    <View style={{ flex: 4, justifyContent: 'center', alignItems: 'center' }}>
        <FlatList
        data={DATA}
        renderItem={renderItem}
        keyExtractor={item => item.id}
      />
    </View>
    </View>
  );
}

const Stack = createStackNavigator();

export default function dummyStack(){
  return(
      <Stack.Navigator>
        <Stack.Screen name='Tour List' component={listScreen}/>
        <Stack.Screen name='Singapore Philatelic Museum' component={philatelicinfo}/>
        <Stack.Screen name='Planet or Plastic?' component={planetInfo}/>
      </Stack.Navigator>
  )
}


const styles = StyleSheet.create({
  tourLink :{
    margin:20,
    width:350,
    height: 200,
    backgroundColor: '#7556A9',
    borderRadius: 5,
    alignItems:'center',
    justifyContent:'center',
  }
})