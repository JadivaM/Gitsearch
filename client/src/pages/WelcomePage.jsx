import React from 'react';
import NavigationBar from '../components/NavigationBar';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const WelcomePage = () => {
  return (
    <>
      <div className="welcome-page-main-container">
        <NavigationBar />
        <div className="welcome-page-hero-image-container-text">
          <h1 className="welcome-page-hero-image-text-title">
            Made for Developers
          </h1>
          <h5 className="welcome-page-hero-image-text-title--caption">
            Easily search, save, and follow Github users in one place
          </h5>
          <Link to="/login">
            <Button
              style={{
                color: 'white',
                backgroundColor: '#0f3c49',
                border: 'none',
                width: 100,
                marginRight: 40,
                marginTop: 20
              }}
            >
              Log in
            </Button>
          </Link>
          <Link to="/signup">
            <Button
              style={{
                color: 'white',
                backgroundColor: '#0f3c49',
                border: 'none',
                width: 100,
                marginTop: 20
              }}
            >
              Sign up
            </Button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default WelcomePage;
