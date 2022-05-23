import { VStack, Text, Flex, Spacer, Center, Box, Divider } from "@chakra-ui/react";
import React from "react";
import Footer from "./Footer";
import Header from "./navbar/Header";

const About = () => {
    return (
        <Box textAlign="center" fontSize="xl">
            <Flex h='700' bg="gray.900" color="white" direction="column">
                <Spacer />
                <Center>About</Center>
                <Spacer />
            </Flex>
        </Box>
    )
}

export default About;