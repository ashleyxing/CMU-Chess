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
  Divider
} from '@chakra-ui/react';
import Home from './components/Home'
import Header from './components/navbar/Header';
function App() {
  return (
      <Box textAlign="center" fontSize="xl">
        <Header />
        <Divider />
        <Home/>
      </Box>
  );
}

export default App;
