import React, { useState, useEffect } from "react";
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
import { FontAwesome } from "@expo/vector-icons";
import { back } from "react-native/Libraries/Animated/src/Easing";
import InfoScreen from "./infoScreen"
import data from '../data.js'

function PurpleButton(props) {
  return (
    <TouchableOpacity style={styles.button} onPress={props.onPress}>
      <Text style={styles.buttonText}>{props.title}</Text>
    </TouchableOpacity>
  );
}

function ListScreen({ navigation, likes, likeTour }) {
  const [list, setList] = useState(data);
  const [favorite, setFavorite] = useState(false);
  const [price, setPrice] = useState(false);

  useEffect(() => {
    const priceFilter = price ? data.filter(item => item.price === 0) : data
    const favFilter = favorite ? priceFilter.filter(item => likes.includes(item.id)) : priceFilter
    setList(favFilter)
  }, [price, favorite])

  function renderItem({ item }) {
    return (
        <View style={styles.tourBox}>
          <Image
            source={item.image}
            style={{
              width: "100%",
              height: "50%",
              borderTopRightRadius: 10,
              borderTopLeftRadius: 10,
            }}
          />
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
              <TouchableOpacity
                onPress={() => {
                  navigation.navigate('Info', {
                    id: item.id,
                    title: item.title,
                  });
                }}
                style={{ width: "70%" }}
              >
                <Text
                  style={{
                    fontWeight: "bold",
                    color: "black",
                    padding: 10,
                    fontSize: 16,
                  }}
                >
                  {item.title}
                </Text>
              </TouchableOpacity>
              <TouchableOpacity 
                style={{
                  width: "15%",
                  padding: 10,
                  marginRight: 0,
                  right: 0,
                  position: "absolute",
                }}
                onPress={() => likeTour(item.id)}
              >
                <FontAwesome
                  name={likes.includes(item.id) ? "star" : "star-o"}
                  size={24}
                  color="black" 
                />
              </TouchableOpacity>
            </View>
            <Text
              style={{ margin: 10, }}
              numberOfLines={2}
            >
              {item.description}
            </Text>
            <TouchableOpacity
              onPress={() => {
                Linking.openURL(item.link).catch((err) => {
                  console.error("Failed opening page because: ", err);
                  alert("Failed to open page");
                });
              }}
              style={{ flexDirection: "row" }}
            >
              <FontAwesome
                name="external-link"
                size={20}
                color="black"
                style={{ marginRight: 10, marginLeft: 10 }}
              />
              <Text
                numberOfLines={1}
                style={{width: '80%'}}
              >
                {item.link}
              </Text>
            </TouchableOpacity>
          </View>
        </View>
    );
  }

  return (
    <View style={{ alignItems: "center", flex: 1 }}>
      <View style={styles.buttons}>
        <PurpleButton title={price ? "Price: Free" : "Price: All"} onPress={() => setPrice(!price)} />
        <PurpleButton title={favorite ? "Status: Favorites" : "Status: All"} onPress={() => setFavorite(!favorite)} />
      </View>
      <FlatList 
        data={list} 
        renderItem={renderItem} 
        keyExtractor={item => item.id}
        extraData={likes}
      />
    </View>
  );
}

const Stack = createStackNavigator();

export default function listStack(props) {
  const { likes, likeTour } = props
  return (
    <Stack.Navigator>
      <Stack.Screen name="Tour List">
        {(props) => <ListScreen {...props} likes={likes} likeTour={likeTour} />}
      </Stack.Screen>
      <Stack.Screen 
        name='Info' 
        options={({ route }) => ({ title: route.params.title })}
      >
        {(props) => <InfoScreen {...props} likes={likes} likeTour={likeTour} />}
      </Stack.Screen>
    </Stack.Navigator>
  );
}

const styles = StyleSheet.create({
  tourBox: {
    marginBottom: 20,
    marginLeft: 10,
    marginRight: 10,
    width: 350,
    height: 250,
    backgroundColor: "white",
    borderRadius: 10,
  },
  buttons: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'center',
    margin: 10,
  },
  button: {
    backgroundColor: "#7556A9",
    padding: 10,
    borderRadius: 10,
    margin: 5,
  },
  buttonText: {
    color: 'white'
  }
});
