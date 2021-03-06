import React from 'react';
import { Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const NavigationBar = () => {
  return (
    <div>
      <Navbar>
        <Navbar.Brand style={{ width: '100%', backgroundColor: 'transparent' }}>
          <div className="navbar-container">
            <Link to="/welcome">
              <h3 className="navbar-title">Gitsearch</h3>
            </Link>
          </div>
        </Navbar.Brand>
      </Navbar>
    </div>
  );
};

export default NavigationBar;
