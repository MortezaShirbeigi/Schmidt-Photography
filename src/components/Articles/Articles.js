import React from "react";
import { Row, Col } from "react-bootstrap";
import Loader from "../Loader/Loader";
import Wrapper from "../../hoc/Wrapper";
import Article from "../Article/Article";
import "./Articles.scss";

const Articles = ({ loading, posts, mdColumn }) => {
  return (
    <Wrapper>
      {loading ? <Loader /> : null}
      <Row>
        {posts.map((item) => {
          return (
            <Col
              className="mb-5"
              key={item.id}
              md={{ span: mdColumn }}
              lg={{ span: 4 }}
            >
              <Article post={item} />
            </Col>
          );
        })}
      </Row>
    </Wrapper>
  );
};

export default Articles;
