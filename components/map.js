import * as React from 'react';
import MapView, { Marker, Callout } from 'react-native-maps';
import { StyleSheet, Dimensions } from 'react-native';

const locations = [{
	coordinate: {
		latitude: 1.2936221316260519,
		longitude: 103.84879194602308,
	},
	title: 'Orange Room Tour',
	page: 'page 1',
}, {
	coordinate: {
		latitude: 1.2855560432517972,
		longitude: 103.86096858465896,
	},
	title: 'Planet or Plastic?',
	page: 'page 2',
}]

export default function Map() {
  return (
    <MapView 
      style={styles.map} 
      initialRegion={{
        latitude: 1.352083,
        longitude: 103.819836,
        latitudeDelta: 0.7,
        longitudeDelta: 0.7,
      }}
      rotateEnabled={false}
    >
      {locations.map((tour, index) => (
        <Marker
          key={index}
          coordinate={tour.coordinate}
          title={tour.title}
        >
          <Callout onPress={() => console.log(`Go to ${tour.page}`)} />
        </Marker>
      ))}
    </MapView>
  );
}

const styles = StyleSheet.create({
  map: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
  },
});



