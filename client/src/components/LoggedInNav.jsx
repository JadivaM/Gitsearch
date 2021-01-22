import React from 'react';
import { Navbar, NavDropdown, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const LoggedInNav = () => {
  return (
    <>
      <div className="nav-container">
        <Navbar bg="dark" variant="dark" className="navbar">
          <div className="loggedin-nav-title">
            <Navbar.Brand href="#home">Wynhub</Navbar.Brand>
          </div>
          <div className="search-nav"></div>
          <div className="dropdown-nav">
            <NavDropdown title="Dropdown" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.2">Home</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.1">Settings</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">Logout</NavDropdown.Item>
            </NavDropdown>
          </div>
        </Navbar>
      </div>
    </>
  );
};

export default LoggedInNav;
