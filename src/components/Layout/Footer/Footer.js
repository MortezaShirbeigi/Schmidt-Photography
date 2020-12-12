import React from "react";
import "./Footer.scss";
import { Container } from "react-bootstrap";
import Newsletter from "./Newsletter/Newsletter";
import FooterMenu from "./FooterMenu/FooterMenu";
import BottomItems from "./BottomItems/BottomItems";

const Footer = () => {
  return (
    <footer>
      <Container fluid className="footer">
        <Container className="text-white text-center">
          <Newsletter />
          <FooterMenu />
          <BottomItems />
        </Container>
      </Container>
    </footer>
  );
};

export default Footer;
