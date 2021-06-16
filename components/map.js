import * as React from 'react';
import MapView, { Marker, Callout } from 'react-native-maps';
import { View, Text, StyleSheet, Dimensions } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import InfoScreen from '../screens/infoScreen'
import locations from '../data.js'


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
      {locations.map((tour) => (
        <Marker
          key={tour.id}
          coordinate={tour.coordinate}
          title={tour.title}
        >
          <Callout onPress={() => navigation.navigate('Info', {
            id: tour.id,
            title: tour.title,
          })} />
        </Marker>
      ))}
    </MapView>
  );
}

const Stack = createStackNavigator();

export default function mapStack(props){
  const { likes, likeTour } = props
  return(
      <Stack.Navigator initialRouteName='Map'>
        <Stack.Screen name='Map' component={MapBox}/>
        <Stack.Screen 
          name='Info' 
          options={({ route }) => ({ title: route.params.title })}
        >
          {(props) => <InfoScreen {...props} likes={likes} likeTour={likeTour} />}
        </Stack.Screen>
      </Stack.Navigator>
  )
}

const styles = StyleSheet.create({
  map: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
  },
});
