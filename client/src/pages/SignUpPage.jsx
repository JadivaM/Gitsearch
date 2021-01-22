import React from 'react';
import NavigationBar from '../components/NavigationBar';
import Signup from '../components/Signup';

const SignUpPage = () => {
  return (
    <>
      <NavigationBar />
      <div className="homeBackgroundImage">
        <Signup />
      </div>
    </>
  );
};

export default SignUpPage;
