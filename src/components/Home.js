import React from 'react';
import cmu from './images/cmu.jpeg';

import { VStack, Text, Flex, Grid, GridItem, Center, Spacer, Image, Box } from '@chakra-ui/react';
const Home = () => {
    return (
        // WHY THE HEIGHT NOT FILL BRUH
        <Grid templateColumns='repeat(2,1fr)' bg='gray.900' color='white'>
            <Box>
                <Center padding-left='50px' padding='20px'>
                    <Image src={cmu} fallbackSrc='https://via.placeholder.com/150' />
                </Center>
            </Box>
            <Flex>
                <Spacer />
                <Center>
                    Welcome To Carnegie Mellon University Chess Club
                </Center>
                <Spacer />
            </Flex>
        </Grid>
    );
};

export default Home; 