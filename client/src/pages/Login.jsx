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
      <NavigationBar />
      <div className="loginBackgroundImage">
        <div className="main-container">
          <Container
            className="form-container"
            style={{ backgroundColor: 'white', width: 400, height: 375 }}
          >
            <Form
              className="form"
              style={{ width: 300 }}
              onSubmit={handleLogin}
            >
              <h2 style={{ textAlign: 'center' }}>Welcome back!</h2>
              <Form.Group>
                <Form.Label htmlFor="email">Email Address</Form.Label>
                <Form.Control
                  id="email"
                  type="email"
                  placeholder="Email Address"
                  name="email"
                  onChange={handleChange}
                />
              </Form.Group>
              <Form.Group>
                <Form.Label htmlFor="password">Password</Form.Label>
                <Form.Control
                  id="password"
                  type="password"
                  placeholder="Password"
                  name="password"
                  onChange={handleChange}
                />
              </Form.Group>
              <Form.Group className="d-flex justify-content-center">
                <Button variant="outline-primary" type="submit" size="lg" block>
                  Login
                </Button>
              </Form.Group>
            </Form>
            <Link to="/" style={{ marginLeft: 50 }}>
              Don't have an account yet? Sign up
            </Link>
            <div>
              <Link to="/resetpassword" style={{ marginLeft: 130 }}>
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
