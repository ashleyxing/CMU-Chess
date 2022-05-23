import { ColorModeScript, Flex, Spacer } from '@chakra-ui/react';
import React, { StrictMode } from 'react';
import * as ReactDOM from 'react-dom/client';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import Events from './components/Events';
import LoadPage from './components/LoadPage';
import reportWebVitals from './reportWebVitals';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { theme, extendTheme, ChakraProvider } from '@chakra-ui/react';

const container = document.getElementById('root');
const root = ReactDOM.createRoot(container);

root.render(
  <ChakraProvider theme={theme}>
    <StrictMode>
      <BrowserRouter>
        <Routes>
          <Route exact path='/' element={<LoadPage page={<Home/>}/>}/>
          <Route exact path='about' element={<LoadPage page={<About/>}/>}/>
          <Route exact path='contact' element={<LoadPage page={<Contact/>}/>}/>
          <Route exact path='events' element={<LoadPage page={<Events/>}/>}/>
        </Routes>
      </BrowserRouter>
    </StrictMode>
  </ChakraProvider>
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://cra.link/PWA
serviceWorker.unregister();

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
