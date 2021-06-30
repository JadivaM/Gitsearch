import React from 'react';
import NavigationBar from '../components/NavigationBar';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import video from '../images/code.mp4';

const WelcomePage = () => {
  return (
    <>
      <div className="welcome-page-main-container">
        <NavigationBar />
        <video autoPlay loop muted className="video">
          <source src={video} type="video/mp4" />
        </video>
        <div className="welcome-page-hero-image-container-text">
          <h1 className="welcome-page-hero-image-text-title">
            Made for Developers
          </h1>
          <h5 className="welcome-page-hero-image-text-title--caption">
            Search, save, and follow Github users in one place
          </h5>
          <div className="welcome-page-buttons-container">
            <Link to="/signup">
              <Button id="welcome-page-button">Get started ➜</Button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default WelcomePage;
