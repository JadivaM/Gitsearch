import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Container, Form, Button } from 'react-bootstrap';
import NavigationBar from '../components/NavigationBar';
import axios from 'axios';

const ForgotPassword = () => {
  const [email, setEmail] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    const form = e.target;
    try {
      await axios.get(`/password?email=${email}`);
      form.reset();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <NavigationBar />
      <Container className="container d-flex flex-column align-items-center justify-content-center fullscreen">
        <h1 className="mb-4">Reset Password</h1>
        <Form style={{ width: 300 }} onSubmit={handleSubmit}>
          <Form.Group controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              type="email"
              placeholder="Enter email"
              name="email"
              onChange={(e) => setEmail(e.target.value)}
              required
              autoComplete="off"
            />
          </Form.Group>
          <Form.Group className="d-flex justify-content-center">
            <Button variant="primary" type="submit">
              Reset Password
            </Button>
          </Form.Group>
        </Form>
        <Link to="/login">Go back</Link>
      </Container>
    </>
  );
};

export default ForgotPassword;
