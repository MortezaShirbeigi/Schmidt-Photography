import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa";
import "./TopNavbar.scss";
import PROJECT_URL from "../../../../configs/PROJECT_URL";

const TopNavbar = () => {
  return (
    <Navbar bg="transparent" variant="dark" expand="lg">
      <Container className="py-3">
        <Link to="/">
          <img src={`${PROJECT_URL}assets/images/logo.png`} alt="" />
        </Link>
        <Navbar.Toggle aria-controls="navbar-nav" />
        <Navbar.Collapse id="navbar-nav">
          <Nav className="ml-auto pt-4 pt-md-0">
            <Link to="/" className="nav-link mb-2">
              Home
            </Link>
            <Link to="/about" className="nav-link mb-2">
              About
            </Link>
            <Link to="/contact" className="nav-link mb-2">
              Contact
            </Link>
            <Link to="/blog" className="nav-link mb-2">
              Blog
            </Link>
            <Link to="/shop" className="nav-link mb-2">
              Shop
            </Link>
            <Link to="/Cart" className="nav-link">
              <FaShoppingCart /> 2
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default TopNavbar;
