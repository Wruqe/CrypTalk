import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

import { useNavigate } from "react-router-dom";

function LoginContainer() {
  const [showSignUp, setShowSignUp] = useState(false);
  const navigate = useNavigate();

function LoginContainer() {
  const [showSignUp, setShowSignUp] = useState(false);
  const handleSignUpClick = () => {
    setShowSignUp(!showSignUp);
  };

  const handleSignUpSubmit = (event) => {
    event.preventDefault();
    console.log("Sign up submitted");
    navigate("/home");
  };
  const handleLogInSubmit = (event) => {
    event.preventDefault();
    console.log("log in submitted");
    navigate("/home");

  };

  return (
    <Container>
      <Row>
        <Col>
          <button onClick={handleSignUpClick}>
            {showSignUp ? "Login" : "Sign Up"}
          </button>
          {showSignUp ? (
            <Form onSubmit={handleSignUpSubmit}>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" placeholder="Enter email" />
                <Form.Text className="text-muted">
                  We'll never share your email with anyone else.
                </Form.Text>
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Password" />
              </Form.Group>

              <Button variant="primary" type="submit">
                Sign Up
              </Button>
            </Form>
          ) : (
            <Form onSubmit={handleLogInSubmit}>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" placeholder="Enter email" />
                <Form.Text className="text-muted">
                  We'll never share your email with anyone else.
                </Form.Text>
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Password" />
              </Form.Group>

              <Button variant="primary" type="submit">
                Log In
              </Button>
            </Form>
          )}
        </Col>
      </Row>
    </Container>
  );
}

export default LoginContainer;
