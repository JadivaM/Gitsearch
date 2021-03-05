import React from 'react';
import { Navbar, Button } from 'react-bootstrap';

const NavigationBar = () => {
  return (
    <div>
      <Navbar>
        <Navbar.Brand
          href="#home"
          style={{ width: '100%', backgroundColor: 'transparent' }}
        >
          <div className="navbar-container">
            <h3 className="navbar-title">Gitsearch</h3>
          </div>
        </Navbar.Brand>
      </Navbar>
    </div>
  );
};

export default NavigationBar;
