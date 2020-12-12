import React from "react";
import { Button, Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import PROJECT_URL from "../../configs/PROJECT_URL";

const NotFound = () => {
  return (
    <Container className="text-center my-5 py-5">
      <img src={`${PROJECT_URL}assets/images/404.png`} alt="" />
      <p style={{ fontSize: "3rem", fontWeight: "bold" }}>page not found! :(</p>
      <Button variant="secondary">
        <Link to="/" className="nav-link">
          Back To Home
        </Link>
      </Button>
    </Container>
  );
};

export default NotFound;
