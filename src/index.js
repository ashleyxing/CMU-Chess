import { ColorModeScript, Flex, Spacer } from '@chakra-ui/react';
import React, { StrictMode } from 'react';
import * as ReactDOM from 'react-dom/client';
import App from './App';
import About from './components/About';
import Contact from './components/Contact';
import Events from './components/Events';
import Footer from './components/Footer';
import reportWebVitals from './reportWebVitals';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { theme, extendTheme, ChakraProvider } from '@chakra-ui/react';

const container = document.getElementById('root');
const root = ReactDOM.createRoot(container);

root.render(
  <ChakraProvider theme={theme}>
    <BrowserRouter>
      <StrictMode>
        <Routes>
          <Route exact path='/' element={<App/>}/>
          <Route exact path='about' element={<About/>}/>
          <Route exact path='contact' element={<Contact/>}/>
          <Route exact path='events' element={<Events/>}/>
        </Routes>
      </StrictMode>
    </BrowserRouter>
  </ChakraProvider>
);

// function App() {
//   return ( 
//     <ChakraProvider> 
//       <App />
//     </ChakraProvider>
//   )
// }
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://cra.link/PWA
serviceWorker.unregister();

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
