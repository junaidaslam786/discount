import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import home1 from '../assets/images/home1.png';
import gift from '../assets/images/gift.png';
import '../assets/styles/Home.css';

const Section = ({ children }) => <div>{children}</div>;

const HomeScreen = () => {
  return (
    <Container className="p-4">
      <Row>
        <Col md={4}>
          <Section>
            <img src={home1} alt="home1" className="section" />
          </Section>
        </Col>
        <Col md={4}>
          <Section>
            <div className="d-flex align-items-center justify-content-center">
              <h6>TOP DISCOUNT SALES</h6>
            </div>
            <img src={gift} alt="home1" className="section1" />
          </Section>
        </Col>
        <Col md={'5'}>
          <Section>
            <img src={home1} alt="home1" className="section" />
          </Section>
        </Col>
        <Col md={5}>
          <Section>
            <div className="d-flex align-items-center justify-content-center">
              <h6>TOP DISCOUNT SALES</h6>
            </div>
            <img src={gift} alt="home1" className="section1" />
          </Section>
        </Col>
      </Row>
    </Container>
  );
};

export default HomeScreen;
