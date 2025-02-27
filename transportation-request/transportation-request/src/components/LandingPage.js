import React from 'react';
import { Container, Row, Col, Navbar, Nav, Button } from 'react-bootstrap';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import './LandingPage.css';

const scrollToSection = (id) => {
  const section = document.getElementById(id);
  if (section) {
    section.scrollIntoView({ behavior: "smooth" });
  }
};

const LandingPage = () => {
  const navigate = useNavigate();
  return (
    <div className="landing-page">
      {/* Navigation Bar */}
      <Navbar bg="primary" variant="dark" expand="lg" className="fixed-top">
        <Container>
          <Navbar.Brand href="#" className="fw-bold">Transportation Portal</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse className="justify-content-end">
            <Nav>
              <Nav.Link onClick={() => scrollToSection("hero")}>About</Nav.Link>
              <Nav.Link onClick={() => scrollToSection("features")}>Features</Nav.Link>
              <Nav.Link onClick={() => scrollToSection("contact")}>Contact</Nav.Link>
              <Button variant="outline-light" className="ms-3" onClick={() => navigate('/login')}>Login</Button>
              <Button variant="primary" className="ms-2" onClick={() => navigate('/register')}>Register</Button>
              <Button variant="secondary" className="ms-2" onClick={() => navigate('/team')}>Team</Button>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
   

      {/* Hero Section */}
      <header id="hero" className="hero-section text-white text-center d-flex align-items-center">
        <Container>
          <Row className="justify-content-center">
            <Col lg={8}>
              <motion.h1 
                className="display-3 fw-bold mb-4"
                initial={{ opacity: 0, y: -50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
              >
                Welcome to the Transportation Request Portal
              </motion.h1>
              <motion.p 
                className="lead mb-4"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4, duration: 0.8 }}
              >
                Streamline your school district's transportation requests with our easy-to-use platform.
              </motion.p>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.8, duration: 0.8 }}
              >
                <Button variant="warning" size="lg" className="me-3 mb-3">Get Started</Button>
                <Button variant="outline-light" size="lg" className="mb-3">Learn More</Button>
              </motion.div>
            </Col>
          </Row>
        </Container>
      </header>

      {/* Features Section */}
      <section id="features" className="py-5 bg-white">
        <Container>
          <h2 className="text-center mb-5">Key Features</h2>
          <Row>
            {[
              { title: "Easy Submission", icon: "📝", description: "Submit transportation requests quickly and easily through our user-friendly interface." },
              { title: "Real-time Tracking", icon: "🔍", description: "Track the status of your requests in real-time, from submission to approval." },
              { title: "Secure Data Storage", icon: "🔒", description: "Rest easy knowing your information is stored securely and can be easily exported when needed." },
            ].map((feature, index) => (
              <Col md={4} key={index} className="mb-4">
                <motion.div 
                  className="feature-card text-center p-4"
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <div className="feature-icon mb-3">{feature.icon}</div>
                  <h3 className="h4 mb-3">{feature.title}</h3>
                  <p>{feature.description}</p>
                </motion.div>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      {/* Contact Section */}
      <section id="contact" className="cta-section text-white text-center py-5">
        <Container>
          <h2 className="mb-4">Ready to Simplify Your Transportation Requests?</h2>
          <p className="lead mb-4">Join schools across the country in streamlining their transportation management process.</p>
          <Button variant="light" size="lg" onClick={() => navigate('/register')}>Sign Up Now</Button>

        </Container>
      </section>

    {/* Contact Section */}
    <section id="contact" className="contact-section py-5">
      <Container>
        <h2 className="text-center mb-4">Contact Us</h2>
        <p className="text-center mb-4">
          Have questions or need assistance? Reach out to us!
        </p>
        <Row className="justify-content-center">
          <Col md={6}>
            <form>
              <div className="mb-3">
                <label className="form-label">Your Name</label>
                <input type="text" className="form-control" placeholder="Enter your name" />
              </div>
              <div className="mb-3">
                <label className="form-label">Your Email</label>
                <input type="email" className="form-control" placeholder="Enter your email" />
              </div>
              <div className="mb-3">
                <label className="form-label">Your Message</label>
                <textarea className="form-control" rows="4" placeholder="Enter your message"></textarea>
              </div>
              <Button variant="primary" type="submit" className="w-100">
                Send Message
              </Button>
            </form>
          </Col>
        </Row>
      </Container>
    </section>
      

      {/* Footer */}
      <footer className="bg-dark text-white py-4">
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
    </div>
  );
};

export default LandingPage;