import React, { useState } from 'react';
import AddressComponent from './AddressComponent';
import MapComponent from './MapComponent';

function ParentComponent(props) {

  
  const [latitude, setLatitude] = useState("6.007301276220637");
  const [longitude, setLongitude] = useState("80.51936193680524");

 
 

 

  

  return (
    <div>
      {/* Render the MapComponent and pass the onCoordinatesChange function */}
      <MapComponent />
      {/* Render the AddressComponent and pass the same coordinates */}
      {latitude !== null && longitude !== null && (
        <AddressComponent lat={latitude} lng={longitude} />
      )}
    </div>
  );
}

export default ParentComponent;
