import './App.css';
import { ChakraProvider } from "@chakra-ui/react";
import React from 'react';
import Nav from './Components/Nav';
import Header from './Components/Header';
import Main from './Components/Main';
import Footer from './Components/Footer';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <ChakraProvider>
      <div className="App">
        <Nav className="navText" />
        <Header />
        <Main />
        <Footer />
      </div>
    </ChakraProvider>
  );
}

export default App;
