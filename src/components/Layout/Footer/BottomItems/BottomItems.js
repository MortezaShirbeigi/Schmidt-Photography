import React from "react";
import { Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import {
  FaFacebookF,
  FaInstagram,
  FaYoutube,
  FaTwitter,
  FaLinkedin,
} from "react-icons/fa";
import PROJECT_URL from "../../../../configs/PROJECT_URL";

const BottomItems = () => {
  return (
    <Row>
      <Col
        className="text-center text-md-left"
        sm={{ span: 12 }}
        md={{ span: 4 }}
      >
        <Link to="/" className="nav-link">
          <img src={`${PROJECT_URL}assets/images/logo.png`} alt="logo" />
        </Link>
      </Col>
      <Col className="my-4 my-md-0" sm={{ span: 12 }} md={{ span: 4 }}>
        <p className="mb-0">© 2020 Müller Schmidt</p>
        <p>Design &amp; Developed By Morteza Shirbeigi</p>
      </Col>
      <Col
        className="text-center text-md-right"
        sm={{ span: 12 }}
        md={{ span: 4 }}
      >
        <a href="http://instagram.com/morteza.shirbeigi">
          <FaFacebookF size={25} />
        </a>
        <a href="http://instagram.com/morteza.shirbeigi">
          <FaInstagram size={25} className="ml-3" />
        </a>
        <a href="http://instagram.com/morteza.shirbeigi">
          <FaYoutube size={25} className="ml-3" />
        </a>
        <a href="http://instagram.com/morteza.shirbeigi">
          <FaTwitter size={25} className="ml-3" />
        </a>
        <a href="http://instagram.com/morteza.shirbeigi">
          <FaLinkedin size={25} className="ml-3" />
        </a>
      </Col>
    </Row>
  );
};

export default BottomItems;
