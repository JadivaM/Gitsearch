import React, { useState } from 'react';
import { Container, Form, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const LoginForm = () => {
  const [formData, setFormData] = useState(null);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  return (
    <>
      <div className="main-container">
        <Container
          className="form-container"
          style={{ backgroundColor: 'white', width: 400, height: 375 }}
        >
          <Form className="form" style={{ width: 300 }}>
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
          <Link to="/home" style={{ marginLeft: 60 }}>
            Don't have an account yet? Sign up
          </Link>
        </Container>
      </div>
    </>
  );
};

export default LoginForm;
