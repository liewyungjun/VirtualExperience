import * as React from "react";
import {
  Text,
  TouchableOpacity,
  View,
  StyleSheet,
  FlatList,
  Dimensions,
  Image,
  Linking,
} from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import philatelicinfo from "./infopages/philatelicMuseum";
import planetInfo from "./infopages/planet";
import { FontAwesome } from "@expo/vector-icons";
import { back } from "react-native/Libraries/Animated/src/Easing";

const DATA = [
  {
    id: "0",
    title: "Singapore Philatelic Museum",
    imageplace: "../assets/philatelicmuseum.jpg",
    uri: "https://www.nhb.gov.sg/spm/who-we-are/resources/virtual-tours",
  },
  {
    id: "1",
    title: "Planet or Plastic?",
    imageplace: "../assets/planetpic.webp",
    uri: "https://www.marinabaysands.com/museum/events/virtual-tour-planet-or-plastic.html",
  },
  {
    id: "2",
    title: "Third Item",
    imageplace: "../assets/planetpic.webp",
  },
];

function listScreen({ navigation }) {
  function renderItem({ item }) {
    return (
      <View>
        <TouchableOpacity
          style={styles.tourLink}
          onPress={() => {
            navigation.navigate(item.title);
            console.log(item.imageplace);
          }}
        >
          <View
            style={{
              width: "100%",
              height: "50%",
              borderTopRightRadius: 10,
              borderTopLeftRadius: 10,
            }}
          ></View>
          <View
            style={{
              backgroundColor: "white",
              width: "100%",
              height: "50%",
              borderBottomRightRadius: 10,
              borderBottomLeftRadius: 10,
            }}
          >
            <View style={{ flexDirection: "row" }}>
              <Text
                style={{
                  width: "70%",
                  fontWeight: "bold",
                  color: "black",
                  padding: 10,
                }}
              >
                {item.title}
              </Text>
              <FontAwesome
                name="star-o"
                size={24}
                color="black"
                style={{
                  width: "15%",
                  padding: 10,
                  marginRight: 0,
                  right: 0,
                  position: "absolute",
                }}
              />
            </View>
            <Text style={{ padding: 10 }}>Description: {item.title}</Text>
            <TouchableOpacity
              onPress={() => {
                Linking.openURL(item.uri).catch((err) => {
                  console.error("Failed opening page because: ", err);
                  alert("Failed to open page");
                });
              }}
            >
              <FontAwesome
                name="external-link"
                size={24}
                color="black"
                style={{ padding: 10, marginLeft: 5 }}
              />
            </TouchableOpacity>
          </View>
        </TouchableOpacity>
      </View>
    );
  }
  return (
    <View>
      <View
        style={{ height: 50, width: "100%", backgroundColor: "black" }}
      ></View>
      <View
        style={{
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "#E5E5E5",
        }}
      >
        <FlatList data={DATA} renderItem={renderItem} />
      </View>
    </View>
  );
}

const Stack = createStackNavigator();

export default function dummyStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Tour List" component={listScreen} />
      <Stack.Screen
        name="Singapore Philatelic Museum"
        component={philatelicinfo}
      />
      <Stack.Screen name="Planet or Plastic?" component={planetInfo} />
    </Stack.Navigator>
  );
}

const styles = StyleSheet.create({
  tourLink: {
    margin: 20,
    width: 350,
    height: 250,
    backgroundColor: "#7556A9",
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
  },
});
