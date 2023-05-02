import React, { useEffect } from "react";
import { View, StyleSheet } from "react-native";
import MapView, { Marker } from "react-native-maps";
import getDirections from "react-native-google-maps-directions";

const App = () => {
  useEffect(() => {
    // Request directions when the component is mounted
    requestDirections();
  }, []);

  const requestDirections = () => {
    const data = {
      source: {
        latitude: 37.7749, // Example: San Francisco coordinates
        longitude: -122.4194,
      },
      destination: {
        latitude: 34.0522, // Example: Los Angeles coordinates
        longitude: -118.2437,
      },
      params: [
        {
          key: "travelmode",
          value: "driving", // Change to 'walking' or 'transit' if desired
        },
      ],
    };

    getDirections(data);
  };

  return (
    <View style={styles.container}>
      <MapView
        style={styles.map}
        initialRegion={{
          latitude: 37.7749,
          longitude: -122.4194,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
      >
        <Marker
          coordinate={{ latitude: 37.7749, longitude: -122.4194 }}
          title="Source"
        />
        <Marker
          coordinate={{ latitude: 34.0522, longitude: -118.2437 }}
          title="Destination"
        />
      </MapView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  map: {
    flex: 1,
  },
});

export default App;
