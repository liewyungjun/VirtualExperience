import * as React from 'react';
import { View, Text, Platform } from 'react-native';

let MapView;

if (Platform.OS === 'web') {
  MapView = props => <Text>Not available on the web</Text>
} else {
  MapView = require('../components/map').default
}

export default function MapScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <MapView />
    </View>
  );
}





