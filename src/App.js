import React from "react";
import { useState } from "react";
import MapComponent from "./MapComponent";
import AddressComponent from "./AddressComponent";
import { Delivery } from "./DeliveryPage";
import ParentComponent from "./ParentComponent";

import { Grid, GridItem } from "@chakra-ui/react";

function App() {
  const [address, setAddress] = useState("");

  const handleAddressChange = (newAddress) => {
    setAddress(newAddress);
  };

  return (
    <div
      style={{
        justifyContent: "center",
        alignItems: "center",
        marginTop: "70px",
        padding: "20px",
        backgroundColor: "#f0f0f0",
      }}
    >
      <Grid templateColumns="repeat(3, 1fr)" gap={5}>
        <GridItem colSpan={1} w="100%" h="500px" bg="blue.500">
          <Delivery />
        </GridItem>

        <GridItem colSpan={1} w="100%" h="500px" bg="blue.500">
          <MapComponent  />
        </GridItem>

        <GridItem colSpan={1} w="100%" h="250px">
        <ParentComponent />
          
        </GridItem>
      </Grid>
    </div>
  );
}

export default App;
