import * as React from 'react';
import { useState, useEffect } from "react";
import { Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { FontAwesome } from '@expo/vector-icons';
import dummy from './screens/dummy';
import HomeScreen from './screens/homeScreen';
import MapScreen from './screens/mapScreen';
import ListScreen from './screens/listScreen';
import LoginScreen from './screens/loginScreen';
import firebase from './database/firebase'

const Tab = createBottomTabNavigator();

const db = firebase.firestore().collection("users")
const user = firebase.auth().user?.uid

export default function App() {
  const [loading, setLoading] = useState(true)
  const [likes, setLikes] = useState([])
  const [user, setUser] = useState(user)

  function likeTour(id) {
    const newArray = likes.includes(id) ? likes.filter(tour => tour !== id) : [...likes, id]
    if (user) {
      db.doc(user).update({ likes: newArray })
        .catch(error => console.log(error))
    } else {
      setLikes(newArray)
    }
  }

  useEffect(() => {
    setTimeout(() => setLoading(false), 3000)
  }, [])

  useEffect(() => {
    if (user) {
      db.doc(user).onSnapshot(doc => {
        if (doc.exists) {
          setLikes(doc.data().likes)
        } else {
          db.doc(user).set({
            likes: []
          })
        }
      })
    }
  }, [user])

  return (
    <>
    {loading === false ? (
    <NavigationContainer>
    <Tab.Navigator
      tabBarOptions={{
        activeTintColor: '#7724b7',
        inactiveTintColor: 'gray',
      }}
      initialRouteName="List"
    >
      <Tab.Screen name="Map" options={{tabBarLabel:'Map', tabBarIcon:({color,size}) => (
        <FontAwesome name="map" size={24} color={color} />
      )}}>
        {(props) => <MapScreen {...props} likes={likes} likeTour={likeTour} />}
      </Tab.Screen>
      <Tab.Screen name="List" options={{tabBarLabel:'List', tabBarIcon:({color,size}) => (
        <FontAwesome name="list-ul" size={24} color={color} />
      )}}>
        {(props) => <ListScreen {...props} likes={likes} likeTour={likeTour} />}
      </Tab.Screen>
      <Tab.Screen name="User" options={{tabBarLabel:'User', tabBarIcon:({color,size}) => (
        <FontAwesome name="user" size={24} color={color} />
      )}}>
        {(props) => <LoginScreen {...props} user={user} setUser={setUser} />}
      </Tab.Screen>
    </Tab.Navigator>
    </NavigationContainer>
      ) : (
        <HomeScreen/>
      )}
      </>
  );
}
