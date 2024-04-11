import React, { useState } from "react";
import { GoogleMap, useJsApiLoader, Marker } from "@react-google-maps/api";
import ParentComponent from "./ParentComponent";

// Define libraries as a constant variable
const libraries = ["places"];

const defaultCenter = { lat: 6.0535, lng: 80.221 };

function MapComponent({ }) {
  const { isLoaded } = useJsApiLoader({
    googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY,
    libraries: libraries, // Pass the constant libraries instead of creating a new array
  });

  const [center, setCenter] = useState(defaultCenter);

  const handleMapClick = (event) => {
    const newCenter = {
      lat: event.latLng.lat(),
      lng: event.latLng.lng(),
    };
    setCenter(newCenter);
    console.log("New Coordinates:", newCenter);
    console.log("Latitude:", newCenter.lat);
    console.log("Longitude:", newCenter.lng);
    
    
   
  };

  if (!isLoaded) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <GoogleMap
        center={center}
        zoom={15}
        mapContainerStyle={{ width: "100%", height: "100%" }}
        options={{
          zoomControl: false,
          streetViewControl: false,
          mapTypeControl: false,
          fullscreenControl: false,
        }}
        onClick={handleMapClick}
      >
        {center && <Marker position={center} />}
      </GoogleMap>
      {/* <ParentComponent latitude={center.lat} longitude={center.lng} /> */}
    
     

 


      
    </>
  );
}

export default MapComponent;
