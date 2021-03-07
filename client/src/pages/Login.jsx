import React, { useState, useContext } from 'react';
import { Container, Form, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { AppContext } from '../context/AppContext';
import axios from 'axios';
import NavigationBar from '../components/NavigationBar';

const Login = ({ history }) => {
  const [formData, setFormData] = useState(null);
  const { setCurrentUser } = useContext(AppContext);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('/login', formData);
      sessionStorage.setItem('user', response.data);
      setCurrentUser(response.data);
      history.push('/');
    } catch (error) {
      console.log('Login Error: ', error);
    }
  };

  return (
    <>
      <div className="loginBackgroundImage">
        <NavigationBar />
        <div className="main-container">
          <Container
            className="form-container"
            style={{ backgroundColor: 'white', width: 400, height: 375 }}
          >
            <Form
              autoComplete="off"
              className="form"
              style={{ width: 300 }}
              onSubmit={handleLogin}
            >
              <h1 style={{ color: '#0f3c49', fontSize: '2.5rem' }}>
                Welcome back!
              </h1>
              <Form.Group>
                <Form.Label htmlFor="email">Email Address</Form.Label>
                <Form.Control
                  style={{ boxShadow: 'none' }}
                  id="email"
                  type="email"
                  name="email"
                  onChange={handleChange}
                />
              </Form.Group>
              <Form.Group>
                <Form.Label htmlFor="password">Password</Form.Label>
                <Form.Control
                  style={{ boxShadow: 'none' }}
                  id="password"
                  type="password"
                  name="password"
                  onChange={handleChange}
                />
              </Form.Group>
              <Form.Group className="d-flex justify-content-center">
                <Button
                  style={{
                    color: 'white',
                    backgroundColor: '#0f3c49',
                    border: 'none',
                    boxShadow: 'none'
                  }}
                  type="submit"
                  size="lg"
                  block
                >
                  Login
                </Button>
              </Form.Group>
            </Form>
            <Link to="/signup" style={{ marginLeft: 50, color: 'black' }}>
              Don't have an account yet? Sign up
            </Link>
            <div>
              <Link
                to="/resetpassword"
                style={{ marginLeft: 130, color: 'black' }}
              >
                Forgot password
              </Link>
            </div>
          </Container>
        </div>
      </div>
    </>
  );
};

export default Login;
