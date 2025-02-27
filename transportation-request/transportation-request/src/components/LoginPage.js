import React, { useState } from 'react';
import { Container, Row, Col, Navbar, Nav, Button, Form, Card } from 'react-bootstrap';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../firebase'; // Import Firebase Authentication
import { getFirestore, doc, getDoc } from 'firebase/firestore'; // Import Firestore

const LoginPage = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const db = getFirestore(); // Initialize Firestore

  const handleLogin = async (event) => {
    event.preventDefault();
    setError('');
    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;
  
      // Fetch user data from Firestore
      const userDoc = await getDoc(doc(db, 'users', user.uid));
  
      if (userDoc.exists()) {
        const userData = userDoc.data();
        const userRole = userData.role;
  
        console.log("User role found:", userRole); // Log user role
  
        // Redirect based on user role
        if (userRole === 'parent') {
          navigate('/parent-dashboard');
        } else if (userRole === 'staff') {
          navigate('/staff-dashboard');
        } else if (userRole === 'transportation') {
          navigate('/transportation-dashboard');
        } else {
          setError('Unknown user role. Please contact support.');
        }
      } else {
        setError('User data not found.');
      }
    } catch (err) {
      console.error("Login Error:", err); // Log the entire error
      setError(err.message); // Display error message
    }
  };
  

  return (
    <motion.div 
      className="login-page d-flex flex-column min-vh-100"
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      {/* Navigation Bar */}
      <Navbar bg="primary" variant="dark" expand="lg" className="fixed-top">
        <Container>
          <Navbar.Brand href="#" className="fw-bold">Transportation Portal</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse className="justify-content-end">
            <Nav>
              <Nav.Link onClick={() => navigate("/")}>Home</Nav.Link>
              <Button variant="primary" className="ms-2" onClick={() => navigate('/register')}>Register</Button>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      {/* Login Form Section */}
      <div className="d-flex align-items-center justify-content-center flex-grow-1" style={{ paddingBottom: "80px" }}>
        <Container>
          <Row className="justify-content-center">
            <Col md={5}>
              <motion.div
                initial={{ opacity: 0, y: -50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
              >
                <Card className="p-4 shadow rounded login-card">
                  <Card.Body>
                    <h2 className="text-center mb-4">Login</h2>
                    {error && <div className="alert alert-danger">{error}</div>}
                    <Form onSubmit={handleLogin}>
                      <Form.Group className="mb-3" controlId="formEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control 
                          type="email" 
                          placeholder="Enter email" 
                          value={email} 
                          onChange={(e) => setEmail(e.target.value)} 
                          required 
                        />
                      </Form.Group>
                      <Form.Group className="mb-3" controlId="formPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control 
                          type="password" 
                          placeholder="Enter password" 
                          value={password} 
                          onChange={(e) => setPassword(e.target.value)} 
                          required 
                        />
                      </Form.Group>
                      <Form.Group className="mb-3" controlId="formCheckbox">
                        <Form.Check type="checkbox" label="Remember me" />
                      </Form.Group>
                      <Button variant="primary" type="submit" className="w-100">
                        Login
                      </Button>
                      <div className="text-center mt-3">
                        <a href="/forgot-password" className="text-primary">Forgot password?</a>
                      </div>
                    </Form>
                    
                    {/* Temporary Testing Buttons */}
                    <div className="text-center mt-4">
                      <h5>Test Dashboards</h5>
                      <Button variant="secondary" className="w-100 mb-2" onClick={() => navigate('/parent-dashboard')}>
                        Go to Parent Dashboard
                      </Button>
                      <Button variant="secondary" className="w-100 mb-2" onClick={() => navigate('/staff-dashboard')}>
                        Go to School Staff Dashboard
                      </Button>
                      <Button variant="secondary" className="w-100" onClick={() => navigate('/transportation-dashboard')}>
                        Go to Transportation Dashboard
                      </Button>
                    </div>
                  </Card.Body>
                </Card>
              </motion.div>
            </Col>
          </Row>
        </Container>
      </div>

      {/* Footer */}
      <footer className="bg-dark text-white py-4 mt-auto">
        <Container>
          <Row>
            <Col md={6} className="mb-3 mb-md-0">
              <h5>Transportation Request Portal</h5>
              <p className="mb-0">Simplifying school transportation management</p>
            </Col>
            <Col md={6} className="text-md-end">
              <Nav className="justify-content-md-end">
                <Nav.Link href="#" className="text-white">Privacy Policy</Nav.Link>
                <Nav.Link href="#" className="text-white">Terms of Service</Nav.Link>
                <Nav.Link href="#" className="text-white">Contact Us</Nav.Link>
              </Nav>
            </Col>
          </Row>
        </Container>
      </footer>
    </motion.div>
  );
};

export default LoginPage;
