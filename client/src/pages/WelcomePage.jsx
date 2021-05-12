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
          <div className="welcome-page-buttons-container">
            <Link to="/login">
              <Button id="welcome-page-button">Log in</Button>
            </Link>
            <Link to="/signup">
              <Button id="welcome-page-button">Sign up</Button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default WelcomePage;
