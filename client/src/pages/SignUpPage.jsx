import React, { useState, useContext } from 'react';
import NavigationBar from '../components/NavigationBar';
import { Container, Form, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { AppContext } from '../context/AppContext';
import axios from 'axios';

const SignUp = ({ history }) => {
  const { setCurrentUser } = useContext(AppContext);
  const [formData, setFormData] = useState(null);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSignUp = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('/signup', formData);
      sessionStorage.setItem('user', response.data);
      setCurrentUser(response.data);
      history.push('/login');
    } catch (error) {
      console.log('Signup error:', error.toString());
    }
  };
  return (
    <>
      <div className="homeBackgroundImage">
        <NavigationBar />
        <div className="main-container">
          <Container
            className="form-container"
            style={{ backgroundColor: 'white', width: 400, height: 500 }}
          >
            <Form
              autoComplete="off"
              className="form"
              style={{ width: 300 }}
              onSubmit={handleSignUp}
            >
              <h1 style={{ color: '#0f3c49', fontSize: '3rem' }}>
                Get started
              </h1>
              <Form.Group>
                <Form.Label htmlFor="name">Name</Form.Label>
                <Form.Control
                  style={{ boxShadow: 'none' }}
                  id="name"
                  type="text"
                  name="name"
                  onChange={handleChange}
                />
              </Form.Group>
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
                <small id="passwordHelpBlock" class="form-text text-muted">
                  Your password must be longer than 6 characters.
                </small>
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
                  Sign up
                </Button>
              </Form.Group>
            </Form>
            <Link to="/login" style={{ marginLeft: 60, color: 'black' }}>
              Already have an account? Login
            </Link>
          </Container>
        </div>
      </div>
    </>
  );
};

export default SignUp;
