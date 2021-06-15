import * as React from 'react';
import {useState, useEffect} from "react";
import { Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import dummy from './screens/dummy';
import HomeScreen from './screens/homeScreen';
import { FontAwesome } from '@expo/vector-icons';
import planetInfo from './screens/infopages/planet.js';

function SettingsScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Settings!</Text>
    </View>
  );
}

const Tab = createBottomTabNavigator();


export default function App() {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    setTimeout(() => setLoading(false), 3000)
  }, [])

  return (
    <>
    {loading === false ? (
    <NavigationContainer>
    <Tab.Navigator>
      <Tab.Screen name="Map" component={dummy} options={{tabBarLabel:'Map', tabBarIcon:({color,size}) =>(
        <FontAwesome name="map-o" size={24} color="black" />
      )}} />
      <Tab.Screen name="List" component={dummy} options={{tabBarLabel:'List', tabBarIcon:({color,size}) =>(
        <FontAwesome name="list-ul" size={24} color="black" />
      )}} />
      <Tab.Screen name="User" component={dummy} options={{tabBarLabel:'User', tabBarIcon:({color,size}) =>(
        <FontAwesome name="user" size={24} color="black" />
      )}} />
    </Tab.Navigator>
    </NavigationContainer>
      ) : (
        <HomeScreen/>
      )}
      </>
  );
}
 /* return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="Map" component={HomeScreen} options={{tabBarLabel:'Map', tabBarIcon:({color,size}) =>(
          <FontAwesome name="map-o" size={24} color="black" />
        )}} />
        <Tab.Screen name="List" component={HomeScreen} options={{tabBarLabel:'List', tabBarIcon:({color,size}) =>(
          <FontAwesome name="list-ul" size={24} color="black" />
        )}} />
        <Tab.Screen name="User" component={HomeScreen} options={{tabBarLabel:'User', tabBarIcon:({color,size}) =>(
          <FontAwesome name="user" size={24} color="black" />
        )}} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
*/
