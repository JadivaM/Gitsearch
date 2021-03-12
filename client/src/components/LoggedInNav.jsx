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
      <div>
        <Navbar>
          <Navbar.Brand
            style={{ width: '100%', backgroundColor: 'transparent' }}
          >
            <div className="navbar-container-logged-in">
              <Link to="/" style={{ textDecoration: 'none', color: 'black' }}>
                <h3 className="navbar-title">Gitsearch</h3>
              </Link>
              <div className="navbar-search-logout-container">
                <div className="navbar-profile-link">
                  <Link
                    to="/"
                    style={{ textDecoration: 'none', color: 'black' }}
                  >
                    <p>My profile</p>
                  </Link>
                </div>
                <div className="navbar-search-link">
                  <Link
                    to="/search"
                    style={{ textDecoration: 'none', color: 'black' }}
                  >
                    <p>Search</p>
                  </Link>
                </div>
                <div className="navbar-logout">
                  <Link
                    to="/logout"
                    style={{ textDecoration: 'none', color: 'black' }}
                  >
                    <p onClick={handleSignOut}>Logout</p>
                  </Link>
                </div>
              </div>
            </div>
          </Navbar.Brand>
        </Navbar>
      </div>
    </>
  );
};

export default LoggedInNav;
