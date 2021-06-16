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
import InfoScreen from "./infoScreen"
import data from '../data.js'
import { FontAwesome } from "@expo/vector-icons";
import { back } from "react-native/Libraries/Animated/src/Easing";

function PurpleButton(props) {
  return (
    <TouchableOpacity style={styles.button} onPress={props.onPress}>
      <Text style={styles.buttonText}>{props.title}</Text>
    </TouchableOpacity>
  );
}

function listScreen({ navigation }) {
  const [list, setList] = React.useState(data);

  function renderItem({ item }) {
    return (
      <View>
        <TouchableOpacity
          style={styles.tourLink}
          onPress={() => {
            navigation.navigate('Info', {
              id: item.id,
              title: item.title,
            });
          }}
        >
          <Image
            source={item.image}
            style={{
              width: "100%",
              height: "50%",
              borderTopRightRadius: 10,
              borderTopLeftRadius: 10,
            }} />
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
    <View style={{flex: 1}}>
      <View style={styles.buttons}>
        <PurpleButton title="Tour" onPress={() => {}} />
        <PurpleButton title="Price" onPress={() => {}} />
        <PurpleButton title="Favourite" onPress={() => {}} />
      </View>
      <View
        style={{
          alignItems: "center",
        }}
      >
        <FlatList 
          data={list} 
          renderItem={renderItem} 
          keyExtractor={item => item.id}
        />
      </View>
    </View>
  );
}

const Stack = createStackNavigator();

export default function listStack(props) {
  const { likes, likeTour } = props
  return (
    <Stack.Navigator>
      <Stack.Screen name="Tour List" component={listScreen} />
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
  tourLink: {
    margin: 20,
    width: 350,
    height: 250,
    backgroundColor: "#7556A9",
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
  },
  buttons: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'center',
    marginTop: 10,
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
