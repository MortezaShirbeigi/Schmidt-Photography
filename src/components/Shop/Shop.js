import React from "react";
import "./Shop.scss";
import PROJECT_URL from "../../configs/PROJECT_URL";
import { Container, Row, Col, Image, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const Shop = () => {
  return (
    <Container fluid className="shop-section">
      <Container className="text-white text-center">
        <Row className="flex-column">
          <h2>Shop</h2>
          <p>I see the world completely in black and white</p>
        </Row>
        <Row className="text-center">
          <Col lg={{ span: 6 }}>
            <Image
              className="border border-white w-100"
              src={`${PROJECT_URL}assets/images/shop1.png`}
              fluid
              rounded
            />
          </Col>
          <Col lg={{ span: 6 }}>
            <Image
              className="border border-white mt-4 mt-lg-0 w-100"
              src={`${PROJECT_URL}assets/images/shop2.png`}
              fluid
              rounded
            />
          </Col>
        </Row>
        <Row>
          <Col lg={{ span: 4 }}>
            <Image
              className="border border-white mt-4 w-100"
              src={`${PROJECT_URL}assets/images/shop3.png`}
              fluid
              rounded
            />
          </Col>
          <Col lg={{ span: 4 }}>
            <Image
              className="border border-white mt-4 w-100"
              src={`${PROJECT_URL}assets/images/shop4.png`}
              fluid
              rounded
            />
          </Col>
          <Col lg={{ span: 4 }}>
            <Image
              className="border border-white mt-4 w-100"
              src={`${PROJECT_URL}assets/images/shop5.png`}
              fluid
              rounded
            />
          </Col>
        </Row>
        <Link to="/shop" className="nav-link">
          <Button className="mt-4" variant="outline-primary">
            View More
          </Button>
        </Link>
      </Container>
    </Container>
  );
};

export default Shop;
