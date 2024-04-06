import React from 'react';
import AddressComponent from './AddressComponent'; // Import the AddressComponent
import MapComponent from './MapComponent'; // Assuming you have a MapComponent

function ParentComponent() {
  // Define the latitude and longitude
  const latitude = 45.7128; // Example latitude
  const longitude = -74.0060; // Example longitude

  return (
    <div>
      {/* Render the MapComponent and pass the coordinates */}
      <MapComponent lat={latitude} lng={longitude} />
      {/* Render the AddressComponent and pass the same coordinates */}
      <AddressComponent lat={latitude} lng={longitude} />
    </div>
  );
}

export default ParentComponent;

