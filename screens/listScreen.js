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
import InfoScreen from "./infoScreen"
import data from '../data.js'

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
            <Text style={{ fontWeight: "bold", color: "black", padding: 10 }}>
              {item.title}
            </Text>
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
