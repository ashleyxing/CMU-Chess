import React from 'react';
import {
  ChakraProvider,
  Box,
  Text,
  Link,
  VStack,
  Code,
  Grid,
  theme,
  Divider, 
  Flex
} from '@chakra-ui/react';
import Home from './components/Home'
import Footer from './components/Footer';
import Header from './components/navbar/Header';
function App() {
  return (
      <Flex textAlign="center" fontSize="xl" direction='column'>
        <Header />
        <Divider />
        <Home/>
        <Footer/>
      </Flex>
  );
}

export default App;
