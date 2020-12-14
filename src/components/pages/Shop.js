import React from "react";
import { Container, Row } from "react-bootstrap";
import Product from "../Product/Product";

const Shop = () => {
  return (
    <Container className="my-5 py-5">
      <Row>
        <Product />
      </Row>
    </Container>
  );
};

export default Shop;
