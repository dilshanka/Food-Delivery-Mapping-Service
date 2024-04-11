// import React from "react";
// import AddressComponent from "./AddressComponent";
// import { useState } from "react";
// import { Box, Button, Flex, Heading, Input, Stack } from "@chakra-ui/react";
// // import { MdLocalShipping } from 'react-icons/md';

// function Delivery() {


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
//                 <Input placeholder="Name" />
             
//               </Stack>
//               <Stack direction={{ base: "column", md: "row" }} spacing="4">
//                 <Input placeholder="City" />
//                 {/* <Input placeholder="Zip" /> */}
//               </Stack>
//               <Input placeholder="Address" />
//               <Input placeholder="Mobile No" />
//               <Button colorScheme="blue" rounded="md" w="100%">
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

import React, { useState } from "react";
import { Box, Button, Flex, Heading, Input, Stack } from "@chakra-ui/react";
import axios from 'axios';

function Delivery() {
  const [Name, setName] = useState('');
  const [city, setCity] = useState('');
  const [address, setAddress] = useState('');

  const handlePlaceOrder = () => {
    const deliveryData = {
      Name: Name,
      city: city,
      address: address
    };

    axios.post('/api/delivery', deliveryData)
      .then(response => {
        console.log(response.data);
        // Handle success, e.g., show a success message to the user
      })
      .catch(error => {
        console.error('Error:', error);
        // Handle error, e.g., show an error message to the user
      });
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
              <Stack direction={{ base: "column", md: "row" }} spacing="4">
                <Input placeholder="Name" value={Name} onChange={(e) => setName(e.target.value)} />
                
              </Stack>
              <Stack direction={{ base: "column", md: "row" }} spacing="4">
                <Input placeholder="City" value={city} onChange={(e) => setCity(e.target.value)} />
              
              </Stack>
              <Input placeholder="Address" value={address} onChange={(e) => setAddress(e.target.value)} />
              <Button colorScheme="blue" rounded="md" w="100%" onClick={handlePlaceOrder}>
                Place order
              </Button>
            </Stack>
          </Box>
        </Box>
      </Stack>
    </Flex>
  );
}

export { Delivery };
