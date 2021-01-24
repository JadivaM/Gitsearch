import React from 'react';
import { Navbar, NavDropdown, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const LoggedInNav = () => {
  return (
    <>
      <div className="nav-container">
        <Navbar bg="dark" variant="dark" className="navbar">
          <div className="loggedin-nav-title">
            <Link to="/">
              <Navbar.Brand>Wynhub</Navbar.Brand>
            </Link>
          </div>
          <div className="home-nav">
            <Link to="/">
              <Button variant="link" style={{ color: 'white' }}>
                Home
              </Button>
            </Link>
          </div>
          <div className="search-nav">
            <Link to="/search">
              <Button variant="link" style={{ color: 'white' }}>
                Search
              </Button>
            </Link>
          </div>
          <div className="logout-nav">
            <Link to="/logout">
              <Button variant="link" style={{ color: 'white' }}>
                Logout
              </Button>
            </Link>
          </div>
        </Navbar>
      </div>
    </>
  );
};

export default LoggedInNav;
