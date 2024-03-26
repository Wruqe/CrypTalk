import { useState } from "react";
import { Container, Row, Col, Button, Form } from "react-bootstrap";
import { useMutation } from "@apollo/client";
import { LOGIN, SIGNUP } from '../components/utils/mutations'; // Import your GraphQL mutations
import { useNavigate } from "react-router-dom";
import Auth from "../components/utils/auth";

function Login() {
  const [showSignUp, setShowSignUp] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState(""); // Added username state

  const [loginUser, { loading: loginLoading, error: loginError }] = useMutation(LOGIN);
  const [signupUser, { loading: signupLoading, error: signupError }] = useMutation(SIGNUP); // Added sign-up mutation

  const handleSignUpClick = () => {
    setShowSignUp(!showSignUp);
  };
  const navigate = useNavigate();
  const handleLogInSubmit = async (event) => {
    event.preventDefault();
    try {
      const { data } = await loginUser({
        variables: { email, password },
      });
      if (data && data.loginUser && data.loginUser.token) {
        const token = data.loginUser.token;
        Auth.login(token)
        console.log("Login successful. Token:", token);
        // Handle successful login (e.g., redirect to dashboard)
        navigate("/");
      } else {
        console.error("Unexpected response format:", data);
      }
    } catch (error) {
      console.error("Error occurred during login:", error);
    }
  };

  const handleSignUpSubmit = async (event) => {
    event.preventDefault();
    try {
      const { data } = await signupUser({
        variables: { username, email, password },
      });
      if (data && data.signup && data.signup.token) {
        const token = data.signup.token;
        console.log("Sign up successful. Token:", token);
        console.log("new user", data.signup.user)
        Auth.login(token)
        navigate("/");
        // Handle successful sign up (e.g., redirect to dashboard)
      } else {
        console.error("Unexpected response format:", data);
      }
    } catch (error) {
      console.error("Error occurred during sign up:", error);
    }
  };

  return (
    <Container>
      <Row>
        <Col>
          <Button onClick={handleSignUpClick}>
            {showSignUp ? "Login" : "Sign Up"}
          </Button>
          {showSignUp ? (
            <Form onSubmit={handleSignUpSubmit}>
              <Form.Group className="mb-3" controlId="formBasicUsername"> {/* Added username field */}
                <Form.Label>Username</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter username"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control
                  type="email"
                  placeholder="Enter email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control
                  type="password"
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </Form.Group>
              <Button variant="primary" type="submit" disabled={signupLoading}>
                Sign Up
              </Button>
              {signupLoading && <p>Signing up...</p>}
              {signupError && <p>Error signing up: {signupError.message}</p>}
            </Form>
          ) : (
            <Form onSubmit={handleLogInSubmit}>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control
                  type="email"
                  placeholder="Enter email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control
                  type="password"
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </Form.Group>
              <Button variant="primary" type="submit" disabled={loginLoading}>
                Log In
              </Button>
              {loginLoading && <p>Logging in...</p>}
              {loginError && <p>Error logging in: {loginError.message}</p>}
            </Form>
          )}
        </Col>
      </Row>
    </Container>
  );
}

export default Login;
