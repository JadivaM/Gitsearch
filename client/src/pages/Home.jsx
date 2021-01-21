import React from 'react';
import NavigationBar from '../components/NavigationBar';
import Signup from '../components/Signup';

const Home = () => {
  return (
    <>
      <NavigationBar />
      <div className="homeBackgroundImage">
        <Signup />
      </div>
    </>
  );
};

export default Home;
