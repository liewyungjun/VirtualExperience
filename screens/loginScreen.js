import React from 'react';
import { Text, View, StyleSheet ,TextInput,Button,TouchableOpacity } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { useEffect, useState } from "react";
import { createStackNavigator } from "@react-navigation/stack";
import FontAwesome from "react-native-vector-icons/FontAwesome";  


function Login({navigation}) {
  const [username,setUsername] = useState("");
  const [password,setPassword] = useState("");
  return (
    <View style={styles.container}>
      <Text style={styles.reminder}>To continue, please sign up with your email</Text>
      <Text style={styles.textStyle}>Email Address or Username</Text>
      <TextInput style={styles.usernameInput} onChangeText={(text) =>  setUsername(text)}/>
      <Text style={styles.textStyle}>Password</Text>
      <TextInput style={styles.usernameInput} onChangeText={(text) => setPassword(text)}/>
      <TouchableOpacity style={styles.buttonStyle} onPress={ () => navigation.navigate("Profile") }>
      <Text style={styles.buttonTextStyle}>Submit</Text>
      </TouchableOpacity>
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'left',
    justifyContent:'center',
  },
  textStyle: {
    justifyContent:'center',
    paddingLeft:30,
    fontSize: 15,
    padding:5,
    fontWeight:"bold",
  },
  usernameInput:{
     alignItems:'center',
     justifyContent:'center',
     marginLeft:30,
     height:25, //for bigger box
     borderColor: "black",
     backgroundColor: "pink",
     borderRadius:10,
     width: "85%",
  },
  reminder:{
    justifyContent:'center',
    paddingLeft:30,
    paddingBottom:120,
    fontSize: 15,
  },
  headerTitleStyle:{
    alignItem:'left',
    fontSize: 30,
    fontWeight:"Bold",
  },
  headerStyle:{
    alignItem:'left',
    fontSize: 100,
    fontWeight:"Bold",
    
  },
  buttonStyle:{

     marginTop:20,
     marginLeft:245,
     backgroundColor: "pink",
     borderRadius:20,
     width:'20%'
  },
  buttonTextStyle:{
    paddingLeft:10,
  },
});

const Stack = createStackNavigator();

export default function EventsStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen  name="Login" component= {Login} option={{headerTitle: "Login",headerTitleStyle:styles.headerTitleStyle , headerStyle:styles.headerStyle}}/>
    </Stack.Navigator>
  );
}