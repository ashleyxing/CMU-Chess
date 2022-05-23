import { VStack, Text, Flex, Spacer, Center, Box, Divider } from "@chakra-ui/react";
import React from "react";
import Footer from "./Footer";
import Header from "./navbar/Header";

const Events = () => {
    return (
        <Flex h='700' direction='column' textAlign="center" fontSize="xl" color='white' p='24' bg='gray.900'>
            <Spacer />
            <Center>Nothing to see here yet... but don't worry! Plenty of tournaments and other events are coming your way in the Fall.</Center>
            <Spacer />
        </Flex>
    )
}

export default Events;