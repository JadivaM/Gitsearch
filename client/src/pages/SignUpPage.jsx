import React, { useState, useContext } from 'react';
import NavigationBar from '../components/NavigationBar';
import { Container, Form, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { AppContext } from '../context/AppContext';
import axios from 'axios';
import swal from 'sweetalert';

const SignUp = ({ history }) => {
  const [formData, setFormData] = useState(null);
  const { setCurrentUser } = useContext(AppContext);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSignUp = async (e) => {
    e.preventDefault();
    try {
      if (formData.password !== formData.confirmPassword) {
        swal('Error', 'Oops, passwords must match.');
        return;
      }
      const response = await axios.post('/signup', formData);
      setCurrentUser(response.data);
      // sessionStorage.setItem('user', response.data);
      history.push('/login');
    } catch (error) {
      console.log('SignUp Error: ', error);
    }
  };
  return (
    <>
      <div className="homeBackgroundImage">
        <NavigationBar />
        <div className="main-container">
          <Container id="form-container">
            <Form
              autoComplete="off"
              className="form"
              id="form"
              style={{ width: 300 }}
              onSubmit={handleSignUp}
            >
              <h1 className="login-form-header">Get started</h1>
              <Form.Group>
                <Form.Label className="form-label" htmlFor="name">
                  Name
                </Form.Label>
                <Form.Control
                  style={{ boxShadow: 'none' }}
                  type="text"
                  name="name"
                  onChange={handleChange}
                />
              </Form.Group>
              <Form.Group>
                <Form.Label className="form-label" htmlFor="email">
                  Email Address
                </Form.Label>
                <Form.Control
                  style={{ boxShadow: 'none' }}
                  type="email"
                  name="email"
                  onChange={handleChange}
                />
              </Form.Group>
              <Form.Group>
                <Form.Label className="form-label" htmlFor="password">
                  Password
                </Form.Label>
                <Form.Control
                  style={{ boxShadow: 'none' }}
                  type="password"
                  name="password"
                  onChange={handleChange}
                />
              </Form.Group>
              <Form.Group>
                <Form.Label className="form-label" htmlFor="password">
                  Confirm password
                </Form.Label>
                <Form.Control
                  style={{ boxShadow: 'none' }}
                  type="password"
                  name="confirmPassword"
                  onChange={handleChange}
                />
                <small id="passwordHelpBlock" class="form-text text-muted">
                  Your password must be longer than 6 characters and cannot be
                  password.
                </small>
              </Form.Group>
              <Form.Group className="d-flex justify-content-center">
                <Button id="login-form-button" type="submit" size="lg" block>
                  Sign up
                </Button>
              </Form.Group>
            </Form>
            <Link to="/login" style={{ textAlign: 'center', color: 'black' }}>
              <p className="login-form-signup">
                Already have an account? Login
              </p>
            </Link>
          </Container>
        </div>
      </div>
    </>
  );
};

export default SignUp;
