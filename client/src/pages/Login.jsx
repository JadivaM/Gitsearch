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
          <Container id="form-container">
            <Form
              autoComplete="off"
              id="form"
              style={{ width: 300 }}
              onSubmit={handleLogin}
            >
              <h1 className="login-form-header">Welcome back!</h1>
              <Form.Group>
                <Form.Label htmlFor="email" className="form-label">
                  Email Address
                </Form.Label>
                <Form.Control
                  id="login-form-input"
                  style={{ boxShadow: 'none' }}
                  type="email"
                  name="email"
                  onChange={handleChange}
                />
              </Form.Group>
              <Form.Group>
                <Form.Label htmlFor="password" className="form-label">
                  Password
                </Form.Label>
                <Form.Control
                  id="login-form-input"
                  style={{ boxShadow: 'none' }}
                  type="password"
                  name="password"
                  onChange={handleChange}
                />
              </Form.Group>
              <Form.Group className="d-flex justify-content-center">
                <Button id="login-form-button" type="submit" size="lg" block>
                  Login
                </Button>
              </Form.Group>
            </Form>
            <Link to="/signup" style={{ textAlign: 'center', color: 'black' }}>
              <p className="login-form-signup">
                Don't have an account yet? Sign up
              </p>
            </Link>
            <div>
              <Link
                to="/resetpassword"
                className="login-form-signup"
                style={{ textAlign: 'center', color: 'black' }}
              >
                <p className="login-form-signup">Forgot password</p>
              </Link>
            </div>
          </Container>
        </div>
      </div>
    </>
  );
};

export default Login;
