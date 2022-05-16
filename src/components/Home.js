import React from 'react';
import { VStack, Text, Flex, Grid, GridItem, Center, Spacer } from '@chakra-ui/react';
const Home = () => {
    return (
        // WHY THE HEIGHT NOT FILL BRUH
        <Grid templateColumns='repeat(2,1fr)' bg='gray.900' color='white'>
            <Flex>
                <Spacer />
                <Center>
                    Carnegie Mellon University Chess Club
                </Center>
                <Spacer />
            </Flex>
        </Grid>
    );
};

export default Home; 