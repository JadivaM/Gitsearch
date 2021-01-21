import React from 'react';
import { Navbar } from 'react-bootstrap';

const NavigationBar = () => {
  return (
    <div>
      <Navbar bg="dark" variant="dark">
        <Navbar.Brand href="#home">Wynhub</Navbar.Brand>
      </Navbar>
    </div>
  );
};

export default NavigationBar;
