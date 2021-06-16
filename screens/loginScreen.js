import React from 'react';
import { Text, View, StyleSheet ,TextInput,Button,TouchableOpacity } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { useEffect, useState } from "react";
import { createStackNavigator } from "@react-navigation/stack";
import FontAwesome from "react-native-vector-icons/FontAwesome";  
import firebase from "../database/firebase";
import ProfileScreen from "./dummy"

const auth = firebase.auth();

function Login({navigation, setUser}) {
  const [username,setUsername] = useState("");
  const [password,setPassword] = useState("");
  const [errorMessage,setErrorMessage] = useState("");

  function login() {
  	if (username.trim() !== "" && password.trim() !== "") {
      auth.signInWithEmailAndPassword(username, password)
        .then(userCredential => setUser(userCredential.user.uid))
        .catch(error => {
      	  if (error.code === "auth/user-not-found") {
            auth.createUserWithEmailAndPassword(username, password)
              .then(userCredential => setUser(userCredential.user.uid))
              .catch(error => setErrorMessage(error.message))
      	  } else {
      	    setErrorMessage(error.message)
      	  }
        })
    }
  }

  return (
    <View style={styles.container}>
      <Text style={styles.reminder}>To continue, please sign up with your email</Text>
      <Text style={styles.textStyle}>Email Address</Text>
      <TextInput style={styles.usernameInput} onChangeText={(text) =>  setUsername(text)}/>
      <Text style={styles.textStyle}>Password</Text>
      <TextInput style={styles.usernameInput} onChangeText={(text) => setPassword(text)} secureTextEntry/>
      <TouchableOpacity style={styles.buttonStyle} onPress={login}>
        <Text style={styles.buttonTextStyle}>Submit</Text>
      </TouchableOpacity>
      <Text style={styles.reminder}>{errorMessage}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'flex-start',
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
    alignItems:'flex-start',
    fontSize: 30,
    fontWeight:"bold",
  },
  headerStyle:{
    alignItems:'flex-start',
    fontSize: 100,
    fontWeight:"bold",
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

export default function EventsStack({ user, setUser }) {
  return (<>
  	{user ? <ProfileScreen /> : <Login setUser={setUser} />}
  </>);
}