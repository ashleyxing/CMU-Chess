import React from 'react';
import cmu from './images/cmu.jpeg';

import { VStack, Text, Flex, Grid, GridItem, Center, Spacer, Image, Box, HStack } from '@chakra-ui/react';
const Home = () => {
    return (
        //Fix padding so it's dynamic
            <Flex direction='column' bg='gray.900' color='white' p='24'>
                <Flex direction='row' spacing='24px' justify='space-between'>
                    <Box boxSize='lg' >
                        <Image src={cmu} fallbackSrc='https://via.placeholder.com/150' />
                    </Box>
                    <Center paddingRight='10%' paddingBottom='48'>
                        Welcome To Carnegie Mellon University Chess Club
                    </Center>
                </Flex>
            </Flex>
    );
};

export default Home; 