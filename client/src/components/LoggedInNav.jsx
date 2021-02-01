import React, { useContext } from 'react';
import { Navbar, Button } from 'react-bootstrap';
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
      <div className="nav-container">
        <Navbar bg="dark" variant="dark" className="navbar">
          <div className="loggedin-nav-title">
            <Link to="/">
              <Navbar.Brand>Gitsearch</Navbar.Brand>
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
              <Button
                variant="link"
                style={{ color: 'white' }}
                onClick={handleSignOut}
              >
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
