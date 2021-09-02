import React, { useState, useContext } from 'react';
import NavigationBar from '../components/NavigationBar';
import { Container, Form, Button, InputGroup } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { AppContext } from '../context/AppContext';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import { faEye } from '@fortawesome/free-solid-svg-icons';
import axios from 'axios';
import swal from 'sweetalert';

const SignUp = ({ history }) => {
  const [formData, setFormData] = useState(null);
  const [showPassword, setShowPassword] = useState(false);
  const { setCurrentUser } = useContext(AppContext);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSignUp = async (e) => {
    e.preventDefault();
    try {
      if (formData.password !== formData.confirmPassword) {
        swal('Error', 'Passwords must match.');
        return;
      }
      const response = await axios.post('/signup', formData);
      setCurrentUser(response.data);
      history.push('/login');
    } catch (error) {
      swal('Error', 'Oops, something went wrong.');
    }
  };

  const handleShowPassword = () => {
    setShowPassword(showPassword ? false : true);
  };

  return (
    <>
      <div className="homeBackgroundImage">
        <NavigationBar />
        <div className="main-container">
          <Container id="form-container">
            <Form
              autoComplete="off"
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
                <InputGroup>
                  <InputGroup.Prepend>
                    <InputGroup.Text>
                      <FontAwesomeIcon
                        id="password-icon"
                        onClick={handleShowPassword}
                        icon={showPassword ? faEyeSlash : faEye}
                      />
                    </InputGroup.Text>
                  </InputGroup.Prepend>
                  <Form.Control
                    id="form-password-input"
                    style={{ boxShadow: 'none' }}
                    type={showPassword ? 'text' : 'password'}
                    name="password"
                    onChange={handleChange}
                  />
                </InputGroup>
              </Form.Group>
              <Form.Group>
                <Form.Label className="form-label" htmlFor="password">
                  Confirm password
                </Form.Label>
                <InputGroup>
                  <InputGroup.Prepend>
                    <InputGroup.Text>
                      <FontAwesomeIcon
                        id="password-icon"
                        onClick={handleShowPassword}
                        icon={showPassword ? faEyeSlash : faEye}
                      />
                    </InputGroup.Text>
                  </InputGroup.Prepend>
                  <Form.Control
                    id="form-password-input"
                    style={{ boxShadow: 'none' }}
                    type={showPassword ? 'text' : 'password'}
                    name="confirmPassword"
                    onChange={handleChange}
                  />
                  <small
                    id="passwordHelpBlock"
                    className="form-text text-muted"
                  >
                    Your password must be longer than 6 characters and cannot be
                    password.
                  </small>
                </InputGroup>
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
