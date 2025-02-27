import { Container, Row, Col, Navbar, Nav, Card } from "react-bootstrap"
import { useNavigate } from "react-router-dom"
import { motion } from "framer-motion"

const TeamPage = () => {
  const navigate = useNavigate()

  const teamMembers = [
    { name: "Joseph Cedeno", role: "Project Lead", image: "/placeholder.svg?height=150&width=150" },
    { name: "Sritha Kankanala", role: "Project Manager", image: "/placeholder.svg?height=150&width=150" },
    { name: "Avi Shah", role: "Lead Developer", image: "/aviPic.png" },
    { name: "Abhinav Gitta", role: "Backend Developer", image: "/placeholder.svg?height=150&width=150" },
    { name: "Swetha Kodali", role: "Developer", image: "/placeholder.svg?height=150&width=150" },
    { name: "Dyson Bawol", role: "Developer", image: "/placeholder.svg?height=150&width=150" },
  ]

  return (
    <motion.div
      className="team-page d-flex flex-column min-vh-100"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      {/* Navigation Bar */}
      <Navbar bg="primary" variant="dark" expand="lg" className="fixed-top">
        <Container>
          <Navbar.Brand href="#" className="fw-bold">
            Transportation Portal
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse className="justify-content-end">
            <Nav>
              <Nav.Link onClick={() => navigate("/")}>Home</Nav.Link>
              <Nav.Link onClick={() => navigate("/register")}>Register</Nav.Link>
              <Nav.Link onClick={() => navigate("/login")}>Login</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      {/* Team Information Section */}
      <Container className="mt-5 pt-5">
        <Row className="justify-content-center">
          <Col md={10}>
            <motion.div initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
              <Card className="p-4 shadow rounded">
                <Card.Body>
                  <h2 className="text-center mb-4">Meet Our Team</h2>
                  <p className="text-center mb-5">
                  We are a passionate high school team from the Center for Information Technology (CIT), 
                  dedicated to solving real-world problems through technology. As part of our CIT program, 
                  we were assigned to develop this project to improve school transportation systems. 
                  Our goal is to streamline transportation requests, enhance communication, and simplify logistics 
                  for parents, school staff, and transportation departments. We are excited to use our skills to make 
                  a meaningful impact in our community!
                  </p>

                  <div className="team-grid">
                    {teamMembers.map((member, index) => (
                      <motion.div
                        key={index}
                        className="team-member"
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                      >
                        <img src={member.image || "/placeholder.svg"} alt={member.name} />
                        <h3>{member.name}</h3>
                        <p>{member.role}</p>
                      </motion.div>
                    ))}
                  </div>

                  {/* Group Picture Section */}
                  <motion.div
                    className="group-picture mt-5"
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.5 }}
                  >
                    <h3 className="text-center mb-4">Our Team Together</h3>
                    <div className="group-image-container">
                      <img
                        src="/placeholder.svg?height=400&width=800"
                        alt="Team Group Picture"
                        className="img-fluid rounded shadow"
                      />
                    </div>
                  </motion.div>
                </Card.Body>
              </Card>
            </motion.div>
          </Col>
        </Row>
      </Container>

      {/* Footer */}
      <footer className="bg-dark text-white py-4 mt-5">
        <Container>
          <Row>
            <Col md={6} className="mb-3 mb-md-0">
              <h5>Transportation Request Portal</h5>
              <p className="mb-0">Simplifying school transportation management</p>
            </Col>
            <Col md={6} className="text-md-end">
              <Nav className="justify-content-md-end">
                <Nav.Link href="#" className="text-white">
                  Privacy Policy
                </Nav.Link>
                <Nav.Link href="#" className="text-white">
                  Terms of Service
                </Nav.Link>
                <Nav.Link href="#" className="text-white">
                  Contact Us
                </Nav.Link>
              </Nav>
            </Col>
          </Row>
        </Container>
      </footer>
    </motion.div>
  )
}

export default TeamPage

