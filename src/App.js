import './App.css';
import { ChakraProvider } from "@chakra-ui/react";
import React from 'react';
import Nav from './Components/Nav';
import Header from './Components/Header';
import Main from './Components/Main';
import Footer from './Components/Footer';
import { BrowserRouter as Router } from 'react-router-dom';
// import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <ChakraProvider>
      <Router>
        <Nav className="navText" />
        <Main />
        <Footer />
      </Router>
    </ChakraProvider>
  );
}

export default App;
