// // import React from "react";
// // import AddressComponent from "./AddressComponent";
// // import { useState } from "react";
// // import { Box, Button, Flex, Heading, Input, Stack } from "@chakra-ui/react";
// // // import { MdLocalShipping } from 'react-icons/md';

// // function Delivery() {


// //   return (
// //     <Flex
// //       justifyContent="center"
// //       alignItems="center"
// //       height="500px"
// //       maxWidth="800px"
// //       mx="auto"
// //       bgGradient="linear(to-r, teal.500, green.500)"
// //       borderRadius="md"
// //       p="5"
// //     >
// //       <Stack spacing="4" direction="row" alignItems="center">
// //         <Box textAlign="center"></Box>
// //         <Box flex="1">
// //           <Box bg="white" p="6" borderRadius="md">
// //             <Heading as="h4" size="md" mb="4" textAlign="center">
// //               Delivery Details
// //             </Heading>
// //             <Stack spacing="4">
// //               <Stack direction={{ base: "column", md: "row" }} spacing="4">
// //                 <Input placeholder="Name" />
             
// //               </Stack>
// //               <Stack direction={{ base: "column", md: "row" }} spacing="4">
// //                 <Input placeholder="City" />
// //                 {/* <Input placeholder="Zip" /> */}
// //               </Stack>
// //               <Input placeholder="Address" />
// //               <Input placeholder="Mobile No" />
// //               <Button colorScheme="blue" rounded="md" w="100%">
// //                 Place order
// //               </Button>
// //             </Stack>
// //           </Box>
// //         </Box>
// //       </Stack>
// //     </Flex>
// //   );
// // }

// // export { Delivery };

// import React, { useState } from "react";
// import { Box, Button, Flex, Heading, Input, Stack } from "@chakra-ui/react";
// import axios from 'axios';

// function Delivery() {
//   const [Name, setName] = useState('');
//   const [city, setCity] = useState('');
//   const [address, setAddress] = useState('');
//   const [number, setNumber] = useState('');

//   const handlePlaceOrder = () => {
//     const deliveryData = {
//       Name: Name,
//       city: city,
//       address: address,
//       number: number
//     };

//     axios.post('/api/delivery', deliveryData)
//       .then(response => {
//         console.log(response.data);
//         // Handle success, e.g., show a success message to the user
//       })
//       .catch(error => {
//         console.error('Error:', error);
//         // Handle error, e.g., show an error message to the user
//       });
//   };

//   return (
//     <Flex
//       justifyContent="center"
//       alignItems="center"
//       height="500px"
//       maxWidth="800px"
//       mx="auto"
//       bgGradient="linear(to-r, teal.500, green.500)"
//       borderRadius="md"
//       p="5"
//     >
//       <Stack spacing="4" direction="row" alignItems="center">
//         <Box textAlign="center"></Box>
//         <Box flex="1">
//           <Box bg="white" p="6" borderRadius="md">
//             <Heading as="h4" size="md" mb="4" textAlign="center">
//               Delivery Details
//             </Heading>
//             <Stack spacing="4">
//               <Stack direction={{ base: "column", md: "row" }} spacing="4">
//                 <Input placeholder="Name" id="name" value={Name} onChange={(e) => setName(e.target.value)} />
                
//               </Stack>
//               <Stack direction={{ base: "column", md: "row" }} spacing="4">
//                 <Input placeholder="City" id="city" value={city} onChange={(e) => setCity(e.target.value)} />
              
//               </Stack>
//               <Stack direction={{ base: "column", md: "row" }} spacing="4">
//                 <Input placeholder="Phone Number" id="phno" value={number} onChange={(e) => setNumber(e.target.value)} />
              
//               </Stack>
//               <Input placeholder="Address" id="address" value={address} onChange={(e) => setAddress(e.target.value)} />
//               <Button colorScheme="blue" rounded="md" w="100%" onClick={handlePlaceOrder}>
//                 Place order
//               </Button>
//             </Stack>
//           </Box>
//         </Box>
//       </Stack>
//     </Flex>
//   );
// }

// export { Delivery };


// import React, { useState } from "react";
// import { Box, Button, Flex, Heading, Input, Stack } from "@chakra-ui/react";
// import axios from 'axios';

// function Delivery() {
//   const [name, setName] = useState('');
//   const [city, setCity] = useState('');
//   const [address, setAddress] = useState('');
//   const [phno, setPhno] = useState('');
//   const [message, setMessage] = useState('');

//   const handleSubmit = async () => {
//     try {
//       const response = await axios.post('http://localhost:3000/', { name, city, address, phno });
//       console.log(response.data);
//       setMessage('Delivery details submitted successfully!');
//     } catch (error) {
//       console.error('Error submitting delivery details:', error);
//       if (error.response) {
//         // The request was made and the server responded with a status code
//         console.error('Server responded with status code:', error.response.status);
//         console.error('Response data:', error.response.data);
//       } else if (error.request) {
//         // The request was made but no response was received
//         console.error('No response received from server:', error.request);
//       } else {
//         // Something happened in setting up the request that triggered an Error
//         console.error('Error setting up the request:', error.message);
//       }
//       setMessage('Failed to submit delivery details.');
//     }
//   };
  

//   return (
//     <Flex
//       justifyContent="center"
//       alignItems="center"
//       height="500px"
//       maxWidth="800px"
//       mx="auto"
//       bgGradient="linear(to-r, teal.500, green.500)"
//       borderRadius="md"
//       p="5"
//     >
//       <Stack spacing="4" direction="row" alignItems="center">
//         <Box textAlign="center"></Box>
//         <Box flex="1">
//           <Box bg="white" p="6" borderRadius="md">
//             <Heading as="h4" size="md" mb="4" textAlign="center">
//               Delivery Details
//             </Heading>
//             <Stack spacing="4">
//               <Input placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} />
//               <Input placeholder="City" value={city} onChange={(e) => setCity(e.target.value)} />
//               <Input placeholder="Address" value={address} onChange={(e) => setAddress(e.target.value)} />
//               <Input placeholder="Phone Number" value={phno} onChange={(e) => setPhno(e.target.value)} />
//               <Button colorScheme="blue" rounded="md" w="100%" onClick={handleSubmit}>
//                 Submit
//               </Button>
//               {message && <p>{message}</p>}
//             </Stack>
//           </Box>
//         </Box>
//       </Stack>
//     </Flex>
//   );
// }

// export  { Delivery };


import React, { useState, useEffect } from "react";
import { Box, Button, Flex, Heading, Input, Stack } from "@chakra-ui/react";
import axios from 'axios';

function Delivery() {
  const [name, setName] = useState('');
  const [city, setCity] = useState('');
  const [address, setAddress] = useState('');
  const [phno, setPhno] = useState('');
  const [message, setMessage] = useState('');

  useEffect(() => {
    // Fetch user's geolocation when the component mounts
    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition(
        position => {
          fetchAddress(position.coords.latitude, position.coords.longitude);
        },
        error => {
          console.error("Error getting user's geolocation:", error);
        }
      );
    } else {
      console.error("Geolocation is not supported by this browser.");
    }
  }, []);

  const fetchAddress = async (lat, lng) => {
    try {
      const response = await axios.get(`https://maps.googleapis.com/maps/api/geocode/json?latlng=${lat},${lng}&key=YOUR_API_KEY`);
      if (response.data.results && response.data.results.length > 0) {
        setAddress(response.data.results[0].formatted_address);
      }
    } catch (error) {
      console.error("Error fetching address:", error);
    }
  };

  const handleSubmit = async () => {
    try {
      const response = await axios.post('http://localhost:3000/', { name, city, address, phno });
      console.log(response.data);
      setMessage('Delivery details submitted successfully!');
    } catch (error) {
      console.error('Error submitting delivery details:', error);
      if (error.response) {
        // The request was made and the server responded with a status code
        console.error('Server responded with status code:', error.response.status);
        console.error('Response data:', error.response.data);
      } else if (error.request) {
        // The request was made but no response was received
        console.error('No response received from server:', error.request);
      } else {
        // Something happened in setting up the request that triggered an Error
        console.error('Error setting up the request:', error.message);
      }
      setMessage('Failed to submit delivery details.');
    }
  };

  return (
    <Flex
      justifyContent="center"
      alignItems="center"
      height="500px"
      maxWidth="800px"
      mx="auto"
      bgGradient="linear(to-r, teal.500, green.500)"
      borderRadius="md"
      p="5"
    >
      <Stack spacing="4" direction="row" alignItems="center">
        <Box textAlign="center"></Box>
        <Box flex="1">
          <Box bg="white" p="6" borderRadius="md">
            <Heading as="h4" size="md" mb="4" textAlign="center">
              Delivery Details
            </Heading>
            <Stack spacing="4">
              <Input placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} />
              <Input placeholder="City" value={city} onChange={(e) => setCity(e.target.value)} />
              <Input placeholder="Address" value={address} onChange={(e) => setAddress(e.target.value)} />
              <Input placeholder="Phone Number" value={phno} onChange={(e) => setPhno(e.target.value)} />
              <Button colorScheme="blue" rounded="md" w="100%" onClick={handleSubmit}>
                Submit
              </Button>
              {message && <p>{message}</p>}
            </Stack>
          </Box>
        </Box>
      </Stack>
    </Flex>
  );
}

export  { Delivery };
