import { VStack, Text, Flex, Spacer, Center, Box, Divider } from "@chakra-ui/react";
import React from "react";
import Footer from "./Footer";
import Header from "./navbar/Header";

const Events = () => {
    return (
        <Box textAlign="center" fontSize="xl">
            <Header/>
            <Divider/>
            <Flex h='1000' bg="gray.900" color="white" direction="column">
                <Spacer />
                <Center>Events</Center>
                <Spacer />
                <Footer/>
            </Flex>

        </Box>
    )
}

export default Events;