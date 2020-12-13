import React from "react";
import { Row, Col } from "react-bootstrap";
import Loader from "../Loader/Loader";
import Wrapper from "../../hoc/Wrapper";
import Article from "../Article/Article";
import "./Articles.scss";

const Articles = ({ loading, posts }) => {
  return (
    <Wrapper>
      {loading ? <Loader /> : null}
      <Row>
        {posts.map((item) => {
          return (
            <Col key={item.id} lg={{ span: 4 }}>
              <Article post={item} />
            </Col>
          );
        })}
      </Row>
    </Wrapper>
  );
};

export default Articles;
