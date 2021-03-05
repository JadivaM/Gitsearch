import React from 'react';
import NavigationBar from '../components/NavigationBar';
// import computerImage from '../images/3d-computer-art.png';

const WelcomePage = () => {
  return (
    <>
      <div className="welcome-page-hero-image-container">
        <NavigationBar />
        {/* <img className="welcome-page-hero-image-container-image" src={computerImage} alt="laptop illustration" /> */}
        <div className="welcome-page-hero-image-container-text">
          <h2></h2>
        </div>
      </div>
    </>
  );
};

export default WelcomePage;
