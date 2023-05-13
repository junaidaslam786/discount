import React from 'react';
import { Container, Row, Col, Nav } from 'react-bootstrap';
import '../assets/styles/Footer.css';
import logo from '../assets/discountoGh.png';

const Footer = () => {
  return (
    <footer className="footer">
      <Container className="footer-container">
        <Row>
          <Col md={4} className="footer-col">
            <img src={logo} alt="logo" className="footer-logo" />
            <p className="footer-text">
              We are a team of passionate developers who love to create awesome
              web applications using React and Bootstrap.
            </p>
          </Col>
          <Col md={4} className="footer-col">
            <h4 className="footer-title">Quick Links</h4>
            <Nav className="flex-column footer-nav">
              <Nav.Link href="#">Home</Nav.Link>
              <Nav.Link href="#">Daily Offers</Nav.Link>
              <Nav.Link href="#">Announcements</Nav.Link>
              <Nav.Link href="#">Categories</Nav.Link>
            </Nav>
          </Col>
          <Col md={4} className="footer-col">
            <h4 className="footer-title">Follow Us</h4>
            <div className="footer-icons">
              <a href="/" className="footer-icon">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="/" className="footer-icon">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="/" className="footer-icon">
                <i className="fab fa-instagram"></i>
              </a>
              <a href="/" className="footer-icon">
                <i className="fab fa-linkedin-in"></i>
              </a>
            </div>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="footer-bottom">
            <p className="footer-copy">© 2023 by DiscountoGH. All rights reserved.</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}

export default Footer;
