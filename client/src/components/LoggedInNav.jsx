import React from 'react';
import {
  Navbar,
  Form,
  Button,
  FormControl,
  NavDropdown
} from 'react-bootstrap';

const LoggedInNav = () => {
  return (
    <>
      <div className="nav-container">
        <Navbar bg="dark" variant="dark" className="navbar">
          <div className="loggedin-nav-title">
            <Navbar.Brand href="#home">Wynhub</Navbar.Brand>
          </div>
          <div className="search-nav">
            <Form inline>
              <FormControl
                type="text"
                placeholder="Search for Github users"
                className="mr-sm-2"
              />
              <Button variant="primary">Search</Button>
            </Form>
          </div>
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
