import React, { useState } from 'react';
import MapComponent from './MapComponent';

function AddressComponent({ lat, lng }) {
  const [address, setAddress] = useState(null);

  // Fetch address when component mounts
  React.useEffect(() => {
    fetchAddress(lat, lng);
  }, [lat, lng]);

  // Function to fetch address
  const fetchAddress = async (lat, lng) => {
    try {
      const response = await fetch(
        `https://maps.googleapis.com/maps/api/geocode/json?latlng=${lat},${lng}&key=AIzaSyD-xbhFPR1kmGSBFH98L7MjxTl3J0i5vA8`
      );
      const data = await response.json();
      if (data && data.results && data.results.length > 0) {
        setAddress(data.results[0].formatted_address);
        console.log('Address:', data.results[0].formatted_address);
      }
    } catch (error) {
      console.error('Error fetching address:', error);
    }
  };

  return (
    <div>
      {address ? (
        <p>Address: {address}</p>
      ) : (
        <p>Loading address...</p>
      )}
    </div>
  );
}

export default AddressComponent;