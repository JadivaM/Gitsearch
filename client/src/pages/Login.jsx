import React from 'react';
import NavigationBar from '../components/NavigationBar';
import LoginForm from '../components/LoginForm';

const Login = () => {
  return (
    <>
      <NavigationBar />
      <div className="loginBackgroundImage">
        <LoginForm />
      </div>
    </>
  );
};

export default Login;
