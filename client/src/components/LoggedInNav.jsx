import React, { useContext } from 'react';
import { Navbar, Nav, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useHistory } from 'react-router-dom';
import { AppContext } from '../context/AppContext';
import axios from 'axios';

const LoggedInNav = () => {
  const { setCurrentUser } = useContext(AppContext);
  const history = useHistory();

  const handleSignOut = async () => {
    try {
      await axios({
        method: 'POST',
        url: '/api/users/logout',
        withCredentials: true
      });
      sessionStorage.removeItem('user');
      setCurrentUser(null);
      history.push('/login');
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      <Navbar className="navbar-container" bg="light" expand="lg">
        <Link to="/" style={{ textDecoration: 'none', color: 'black' }}>
          <Navbar.Brand href="/" className="navbar-title">
            Gitsearch
          </Navbar.Brand>
        </Link>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse
          id="basic-navbar-nav"
          className="navbar-container-logged-in"
        >
          <Nav id="navbar-container-logged-in" className="mr-auto">
            <Link to="/" style={{ textDecoration: 'none', color: 'black' }}>
              <p id="navbar-text">Profile</p>
            </Link>
            <Link
              to="/search"
              style={{ textDecoration: 'none', color: 'black' }}
            >
              <p id="navbar-text">Search</p>
            </Link>
            <Link
              to="/logout"
              onClick={handleSignOut}
              style={{ textDecoration: 'none', color: 'black' }}
            >
              <p id="navbar-text">Logout</p>
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </>
  );
};

{
  /* <div className="navbar-container-logged-in">
              <Link to="/" style={{ textDecoration: 'none', color: 'black' }}>
                <h3 className="navbar-title">Gitsearch</h3>
              </Link>
              <div className="navbar-search-logout-container">
                <div className="navbar-profile-link">
                  <Link
                    to="/"
                    style={{ textDecoration: 'none', color: 'black' }}
                  >
                    <p className="navbar-link">My profile</p>
                  </Link>
                </div>
                <div className="navbar-search-link">
                  <Link
                    to="/search"
                    style={{ textDecoration: 'none', color: 'black' }}
                  >
                    <p className="navbar-link">Search</p>
                  </Link>
                </div>
                <div className="navbar-logout">
                  <Link
                    to="/logout"
                    style={{ textDecoration: 'none', color: 'black' }}
                  >
                    <p className="navbar-link" onClick={handleSignOut}>
                      Logout
                    </p>
                  </Link>
                </div>
              </div>
            </div> */
}

export default LoggedInNav;
