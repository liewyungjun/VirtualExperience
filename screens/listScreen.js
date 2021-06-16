import * as React from "react";
import {
  Text,
  TouchableOpacity,
  View,
  StyleSheet,
  FlatList,
  Dimensions,
  Image,
} from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import philatelicinfo from "./infopages/philatelicMuseum";
import planetInfo from "./infopages/planet";

const DATA = [
  {
    id: "0",
    title: "Singapore Philatelic Museum",
    imageplace: "../assets/philatelicmuseum.jpg",
  },
  {
    id: "1",
    title: "Planet or Plastic?",
    imageplace: "../assets/planetpic.webp",
  },
  {
    id: "2",
    title: "Third Item",
    imageplace: "../assets/planetpic.webp",
  },
];

function listScreen({ navigation }) {
  function renderItem({ item }) {
    const x = item.imageplace;
    return (
      <View>
        <TouchableOpacity
          style={styles.tourLink}
          onPress={() => {
            navigation.navigate(item.title);
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
            <Text style={{ fontWeight: "bold", color: "black", padding: 10 }}>
              {item.title}
            </Text>
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
