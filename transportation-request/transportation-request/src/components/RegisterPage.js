import React, { useState } from 'react';
import { Container, Row, Col, Navbar, Nav, Button, Form, Card } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";  // Import Firebase auth

const RegisterPage = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    password: "",
    confirmPassword: "",
    role: "parent",
    school: "",
    district: ""
  });

  const [error, setError] = useState("");

  // Handle Input Changes
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handle Form Submission
  const handleRegister = async (event) => {
    event.preventDefault();

    if (formData.password !== formData.confirmPassword) {
      setError("Passwords do not match!");
      return;
    }

    try {
      await createUserWithEmailAndPassword(auth, formData.email, formData.password);
      
      // Redirect based on user role
      switch (formData.role) {
        case 'parent':
          navigate('/parent-dashboard'); // Redirect to Parent Dashboard
          break;
        case 'staff':
          navigate('/staff-dashboard'); // Redirect to School Staff Dashboard
          break;
        case 'transportation':
          navigate('/transportation-dashboard'); // Redirect to Transportation Department Dashboard
          break;
        default:
          navigate('/dashboard'); // Fallback if role doesn't match
      }
    } catch (error) {
      setError(error.message); // Display Firebase error messages
    }
  };

  return (
    <motion.div 
      className="register-page d-flex flex-column min-vh-100"
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
              <Button variant="outline-light" className="ms-3" onClick={() => navigate('/login')}>Login</Button>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      {/* Registration Form Section */}
      <div className="d-flex align-items-center justify-content-center flex-grow-1" style={{ paddingBottom: "80px" }}>
        <Container>
          <Row className="justify-content-center">
            <Col md={6}>
              <motion.div
                initial={{ opacity: 0, y: -50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
              >
                <Card className="p-4 shadow rounded">
                  <Card.Body>
                    <h2 className="text-center mb-4">Register</h2>
                    {error && <p className="text-danger text-center">{error}</p>}
                    <Form onSubmit={handleRegister}>
                      <Form.Group className="mb-3" controlId="formFullName">
                        <Form.Label>Full Name</Form.Label>
                        <Form.Control type="text" name="fullName" placeholder="Enter your full name" required onChange={handleChange} />
                      </Form.Group>
                      
                      <Form.Group className="mb-3" controlId="formEmail">
                        <Form.Label>Email Address</Form.Label>
                        <Form.Control type="email" name="email" placeholder="Enter your email" required onChange={handleChange} />
                      </Form.Group>
                      
                      <Form.Group className="mb-3" controlId="formPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" name="password" placeholder="Enter password" required onChange={handleChange} />
                      </Form.Group>
                      
                      <Form.Group className="mb-3" controlId="formConfirmPassword">
                        <Form.Label>Confirm Password</Form.Label>
                        <Form.Control type="password" name="confirmPassword" placeholder="Confirm password" required onChange={handleChange} />
                      </Form.Group>
                      
                      <Form.Group className="mb-3" controlId="formRole">
                        <Form.Label>Account Type</Form.Label>
                        <Form.Select name="role" value={formData.role} onChange={handleChange} required>
                          <option value="parent">Parent/Guardian</option>
                          <option value="staff">School Staff</option>
                          <option value="transportation">Transportation Department</option>
                        </Form.Select>
                      </Form.Group>
                      
                      {(formData.role !== 'transportation') && (
                        <Form.Group className="mb-3" controlId="formSchool">
                          <Form.Label>Search for Your School</Form.Label>
                          <Form.Control
                            type="text"
                            name="school"
                            placeholder="Enter school name"
                            value={formData.school}
                            onChange={handleChange}
                            required
                          />
                        </Form.Group>
                      )}
                      
                      {(formData.role === 'staff' || formData.role === 'transportation') && (
                        <Form.Group className="mb-3" controlId="formDistrict">
                          <Form.Label>Search for Your District</Form.Label>
                          <Form.Control
                            type="text"
                            name="district"
                            placeholder="Enter district name"
                            value={formData.district}
                            onChange={handleChange}
                            required
                          />
                        </Form.Group>
                      )}
                      
                      <Form.Group className="mb-3" controlId="formCheckbox">
                        <Form.Check type="checkbox" label="I agree to the Terms & Conditions" required />
                      </Form.Group>
                      
                      <Button variant="primary" type="submit" className="w-100">Register</Button>
                      
                      <div className="text-center mt-3">
                        <span>Already have an account? </span>
                        <a href="/login" className="text-primary">Login</a>
                      </div>
                    </Form>
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

export default RegisterPage;
