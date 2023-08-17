import React from "react";
import { ChakraProvider, Container } from "@chakra-ui/react";
import Nav from "./components/Nav";
import MemeData from "./components/MemeData";

function App() {
    return (
        <ChakraProvider>
            <Container maxW="6xl" p={4} flex={1}>
                <Nav />
                <MemeData />
            </Container>
        </ChakraProvider>
    );
}

export default App;
