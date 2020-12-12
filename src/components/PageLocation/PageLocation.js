import React from "react";
import { Container } from "react-bootstrap";
import { useLocation } from "react-router-dom";

const PageLocation = () => {
  let location;
  let { pathname } = useLocation();
  switch (pathname) {
    case "/about":
      location = "About";
      break;
    case "/contact":
      location = "Contact";
      break;
    case "/blog":
      location = "Blog";
      break;
    case "/shop":
      location = "Shop";
      break;

    default:
      break;
  }

  return (
    <Container
      className="border-top bg-secondary text-white text-center py-2"
      fluid
    >
      <h1 className="py-5 ">{location}</h1>
    </Container>
  );
};

export default PageLocation;
