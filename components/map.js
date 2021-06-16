import * as React from 'react';
import MapView, { Marker, Callout } from 'react-native-maps';
import { View, Text, StyleSheet, Dimensions } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import philatelicinfo from '../screens/infopages/philatelicMuseum';
import planetInfo from '../screens/infopages/planet';

const locations = [{
	coordinate: {
		latitude: 1.2936221316260519,
		longitude: 103.84879194602308,
	},
	title: 'Orange Room Tour',
}, {
	coordinate: {
		latitude: 1.2855560432517972,
		longitude: 103.86096858465896,
	},
	title: 'Planet or Plastic?',
}]

function MapBox({navigation}) {
  return (
    <MapView 
      style={styles.map} 
      initialRegion={{
        latitude: 1.352083,
        longitude: 103.819836,
        latitudeDelta: 0.5,
        longitudeDelta: 0.5,
      }}
      rotateEnabled={false}
    >
      {locations.map((tour, index) => (
        <Marker
          key={index}
          coordinate={tour.coordinate}
          title={tour.title}
        >
          <Callout onPress={() => navigation.navigate(tour.title)} />
        </Marker>
      ))}
    </MapView>
  );
}

const Stack = createStackNavigator();

export default function mapStack(){
  return(
      <Stack.Navigator initialRouteName='Map'>
        <Stack.Screen name='Map' component={MapBox}/>
        <Stack.Screen name='Orange Room Tour' component={philatelicinfo}/>
        <Stack.Screen name='Planet or Plastic?' component={planetInfo}/>
      </Stack.Navigator>
  )
}

const styles = StyleSheet.create({
  map: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
  },
});
