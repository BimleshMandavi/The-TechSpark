"use client"

import React, { useState, useCallback } from 'react';
import { GoogleMap, useJsApiLoader } from '@react-google-maps/api';

// Define types for styles and center coordinates
const containerStyle: React.CSSProperties = {
  width: '348px',
  height: '280px',
  marginTop:"20px"
};

const center = {
  lat: -3.745,
  lng: -38.523
};

const MyComponent: React.FC = () => {
  const { isLoaded } = useJsApiLoader(                                   {
    id: 'google-map-script',
    googleMapsApiKey: "AIzaSyCLmofbhA1NYOxBQ12i5rHbkdlh2xw9iEU" // Replace with your Google Maps API key
  });

  // Define a type for the Google Maps instance
  const [map, setMap] = useState<google.maps.Map | null>(null);

  // onLoad callback to set the map instance and adjust bounds
  const onLoad = useCallback(
    (map: google.maps.Map) => {
      const bounds = new google.maps.LatLngBounds(center);
      map.fitBounds(bounds);
      setMap(map);
    },
    []
  );

  // onUnmount callback to clear the map instance
  const onUnmount = useCallback(
    (map: google.maps.Map | null) => {
      setMap(null);
    },
    []
  );

  return isLoaded ? (
    <GoogleMap
      mapContainerStyle={containerStyle}
      center={center}
      zoom={10}
      onLoad={onLoad}
      onUnmount={onUnmount}
    >
      {/* You can add child components here, like markers, info windows, etc. */}
      <></>
    </GoogleMap>
  ) : (
    <></>
  );
};

export default React.memo(MyComponent);
