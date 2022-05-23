import { Flex, Spacer, Center, SimpleGrid, GridItem, Button, FormControl, Input, FormLabel, Textarea, Heading } from "@chakra-ui/react";
import React from "react";
import Footer from "./Footer";
import Header from "./navbar/Header";

const Contact = () => {
    return (
        <Flex p='25%' paddingTop='5%' h='700' bg="gray.900" color="white" direction="column">
            <Heading>Send us an email!</Heading>
            <FormControl isRequired padding={5}>
                <SimpleGrid columns={2} columnGap={3} rowGap={3}>
                    <GridItem colSpan={1}>
                        <FormLabel>First Name</FormLabel>     
                        <Input placeholder='John' isRequired='true'/>
                    </GridItem>
                    <GridItem colSpan={1}>
                        <FormLabel>Last Name</FormLabel>     
                        <Input placeholder='Smith' isRequired='true'/>
                    </GridItem>
                    <GridItem colSpan={2}>
                        <FormLabel>Email Address</FormLabel>     
                        <Input placeholder='email@gmail.com' isRequired='true'/>
                    </GridItem>
                    <GridItem colSpan={2}>
                        <FormLabel>Message</FormLabel>     
                        <Textarea placeholder='Write Message Here' isRequired='true'/>
                    </GridItem>
                </SimpleGrid>
            </FormControl>
            <Center>
                <Button colorScheme='red'>Submit</Button>
            </Center>
            <Spacer />
        </Flex>
    )
}
export default Contact;