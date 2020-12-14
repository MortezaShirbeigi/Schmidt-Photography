import React from "react";
import { Card, Button } from "react-bootstrap";
import PROJECT_URL from "../../configs/PROJECT_URL";
import Wrapper from "../../hoc/Wrapper";
import "./ProductItem.scss";

const ProductItem = ({ product }) => {
  return (
    <Wrapper>
      <Card key={product.price} className=" border-secondary">
        <div className="border-bottom border-secondary">
          <Card.Img
            key={product.price}
            variant="top"
            src={`${PROJECT_URL}assets/images/product7.png`}
          />
        </div>
        <Button className="productBtn">Add to Card</Button>
      </Card>
      <h6 className="text-center mt-3">{`${product.price}$`}</h6>
    </Wrapper>
  );
};

export default ProductItem;
