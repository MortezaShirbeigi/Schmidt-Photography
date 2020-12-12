import React from "react";
import { Col, Row, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./FooterMenu.scss";

const FooterMenu = () => {
  return (
    <Row className="my-5 pb-4">
      <Col md={{ span: 6 }} lg={{ span: 2, offset: 2 }}>
        <Nav className="flex-column text-center text-lg-left">
          <p className="footer-title">Contact Me</p>
          <Link to="/contact" className="nav-link">
            Contact
          </Link>
          <Link to="/about" className="nav-link">
            About
          </Link>
          <Link to="/shop" className="nav-link">
            Shop
          </Link>
        </Nav>
      </Col>
      <Col md={{ span: 6 }} lg={{ span: 2 }}>
        <Nav className="flex-column text-center text-lg-left mt-4 mt-md-0">
          <p className="footer-title">Shop</p>
          <Link to="/" className="nav-link">
            Frames
          </Link>
          <Link to="/" className="nav-link">
            Shots
          </Link>
          <Link to="/" className="nav-link">
            Equipment
          </Link>
        </Nav>
      </Col>
      <Col md={{ span: 6 }} lg={{ span: 3 }}>
        <Nav className="flex-column text-center text-lg-left mt-4 mt-lg-0">
          <p className="footer-title">Academy</p>
          <Link to="/" className="nav-link">
            Digital Phtography
          </Link>
          <Link to="/" className="nav-link">
            Analog Phtography
          </Link>
          <Link to="/" className="nav-link">
            Consepts
          </Link>
        </Nav>
      </Col>
      <Col md={{ span: 6 }} lg={{ span: 2 }}>
        <Nav className="flex-column text-center text-lg-left mt-4 mt-lg-0">
          <p className="footer-title">Social Media</p>
          <Link to="/" className="nav-link">
            Facebook
          </Link>
          <Link to="/" className="nav-link">
            Instagram
          </Link>
          <Link to="/" className="nav-link">
            Youtube
          </Link>
          <Link to="/" className="nav-link">
            Twitter
          </Link>
        </Nav>
      </Col>
    </Row>
  );
};

export default FooterMenu;
