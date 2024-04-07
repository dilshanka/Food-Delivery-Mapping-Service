import React, { useState } from 'react';
import AddressComponent from './AddressComponent';
import MapComponent from './MapComponent';

function ParentComponent(props) {

  
  const [latitude, setLatitude] = useState(null);
  const [longitude, setLongitude] = useState(null);

 
 

 

  

  return (
    <div>
      {/* Render the MapComponent and pass the onCoordinatesChange function */}
      <MapComponent />
      {/* Render the AddressComponent and pass the same coordinates */}
      {latitude !== null && longitude !== null && (
        <AddressComponent lat={props.latitude} lng={props.longitude} />
      )}
    </div>
  );
}

export default ParentComponent;
