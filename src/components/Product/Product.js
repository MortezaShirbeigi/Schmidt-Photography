import React, { useState, useEffect } from "react";
import axios from "axios";
import { Col, Row } from "react-bootstrap";
import ProductItem from "../ProductItem/ProductItem";
import Loader from "../Loader/Loader";
import Wrapper from "../../hoc/Wrapper";

const Product = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchProducts = async () => {
      setLoading(true);
      const res = await axios.get(
        "https://run.mocky.io/v3/147e91b2-dad5-4728-b050-a047364ec371"
      );
      setLoading(false);
      setProducts(res.data);
    };

    fetchProducts();
  }, []);

  return (
    <Wrapper>
      {loading ? <Loader /> : null}
      <Row>
        {products.map((item) => {
          return (
            <Col
              className="mb-4"
              key={item.id}
              md={{ span: 6 }}
              lg={{ span: 4 }}
            >
              <ProductItem product={item} />
            </Col>
          );
        })}
      </Row>
    </Wrapper>
  );
};

export default Product;
