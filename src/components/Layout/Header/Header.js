import React from "react";
import { Container } from "react-bootstrap";
import TopNavbar from "./TopNavbar/TopNavbar";
import "./header.scss";

const Header = () => {
  return (
    <Container className="header" fluid>
      <TopNavbar />
    </Container>
  );
};

export default Header;
