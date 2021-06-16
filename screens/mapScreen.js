import * as React from 'react';
import { View, Text, Platform } from 'react-native';

function NoMap() {
  return (<View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Not available on the web</Text>
    </View>);
}

let MapView;

if (Platform.OS === 'web') {
  MapView = props => <NoMap />
} else {
  MapView = require('../components/map').default
}

export default function MapScreen() {
  return <MapView />
}





