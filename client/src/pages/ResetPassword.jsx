import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Container, Form, Button } from 'react-bootstrap';
import NavigationBar from '../components/NavigationBar';
import axios from 'axios';
import resetPassword from '../images/forgot-password-img.png';

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
      <div className="reset-password-main-container">
        <NavigationBar />
        <div className="reset-password-container-form">
          <Container className="container d-flex flex-column align-items-center justify-content-center fullscreen">
            <h1 id="reset-password-header" className="mb-4">
              Reset Password
            </h1>
            <p className="reset-password-instructions">
              Enter your registered email address and you'll receive an email
              with instructions on how to reset your password
            </p>
            <img
              className="reset-password-instructions-img"
              src={resetPassword}
            />
            <Form
              style={{ width: 300 }}
              onSubmit={handleSubmit}
              autoComplete="off"
            >
              <Form.Group controlId="formBasicEmail">
                <Form.Label className="form-label">Email address</Form.Label>
                <Form.Control
                  style={{ boxShadow: 'none' }}
                  type="email"
                  name="email"
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  autoComplete="off"
                />
              </Form.Group>
              <Form.Group className="d-flex justify-content-center">
                <Button
                  className="reset-password-submit-button"
                  id="login-form-button"
                  type="submit"
                >
                  Submit
                </Button>
              </Form.Group>
            </Form>
            <Link to="/login" style={{ color: 'black' }}>
              Go back
            </Link>
          </Container>
        </div>
      </div>
    </>
  );
};

export default ForgotPassword;
