import React, { useState, useContext } from 'react';
import { Container, Form, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { AppContext } from '../context/AppContext';
import axios from 'axios';

const Signup = ({ history }) => {
  const { setCurrentUser } = useContext(AppContext);
  const [formData, setFormData] = useState(null);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSignUp = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('/', formData);
      sessionStorage.setItem('user', response.data);
      setCurrentUser(response.data);
      history.push('/');
    } catch (error) {
      console.log('Signup error:', error);
    }
  };

  return (
    <>
      <div className="main-container">
        <Container
          className="form-container"
          style={{ backgroundColor: 'white', width: 400, height: 500 }}
        >
          <Form className="form" style={{ width: 300 }} onSubmit={handleSignUp}>
            <h2 style={{ textAlign: 'center' }}>Get started</h2>
            <p>Search, save, and follow Github users all in one place.</p>
            <Form.Group>
              <Form.Label htmlFor="name">Name</Form.Label>
              <Form.Control
                id="name"
                type="text"
                placeholder="Full Name"
                name="name"
                onChange={handleChange}
              />
            </Form.Group>
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
                Sign up
              </Button>
            </Form.Group>
          </Form>
          <Link to="/login" style={{ marginLeft: 60 }}>
            Already have an account? Login
          </Link>
        </Container>
      </div>
    </>
  );
};

export default Signup;
