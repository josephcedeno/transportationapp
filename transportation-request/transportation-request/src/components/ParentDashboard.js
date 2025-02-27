import React from 'react';
import { Container, Row, Col, Navbar, Nav, Button, Card, ProgressBar, Alert } from 'react-bootstrap';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

const ParentDashboard = () => {
  const navigate = useNavigate();

  const requests = [
    { id: 1, child: 'Jane Doe', status: 'Pending', progress: 50 },
    { id: 2, child: 'Max Doe', status: 'Approved', progress: 100 }
  ];

  const notifications = [
    "Your request for Max Doe was approved!",
    "Jane Doe's request is still pending."
  ];

  return (
    <motion.div 
      className="dashboard-page d-flex flex-column min-vh-100"
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
              <Button variant="outline-light" className="ms-3" onClick={() => navigate('/help')}>Help</Button>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      {/* Dashboard Overview */}
      <Container className="mt-5 pt-5">
        <h2 className="text-center mb-4">Welcome, John! </h2>
        <p className="text-center">You have {requests.filter(r => r.status === 'Pending').length} pending requests.</p>
        
        <div className="text-center mb-4">
          <Button variant="success" className="me-2">Submit Request</Button>
          <Button variant="info">Help</Button>
        </div>
      </Container>

      {/* Active Requests Section */}
      <Container>
        <h3 className="mb-3">Active Requests</h3>
        <Row>
          {requests.map(request => (
            <Col md={6} key={request.id} className="mb-3">
              <Card className="p-3 shadow">
                <Card.Body>
                  <h5>{request.child}</h5>
                  <p>Status: <strong>{request.status}</strong></p>
                  <ProgressBar now={request.progress} label={`${request.progress}%`} />
                  <Button variant="primary" className="mt-2 w-100">View Details</Button>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>

      {/* Notifications */}
      <Container className="mt-4">
        <h3 className="mb-3">Notifications</h3>
        {notifications.map((note, index) => (
          <Alert key={index} variant="success">{note}</Alert>
        ))}
      </Container>

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

export default ParentDashboard;
