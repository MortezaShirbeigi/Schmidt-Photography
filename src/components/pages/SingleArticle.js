import React, { useState, useEffect } from "react";
import axios from "axios";
import Loader from "../Loader/Loader";
import { Container, Row } from "react-bootstrap";
import { useParams } from "react-router-dom";

const SingleArticle = () => {
  const [loading, setLoading] = useState(false);
  const [article, setArticle] = useState({});

  const params = useParams();

  useEffect(() => {
    const fetchPosts = async () => {
      setLoading(true);
      const res = await axios.get(
        "https://run.mocky.io/v3/772f1622-ed0c-40d9-8f4d-764c0451b737"
      );
      const response = await res.data;
      const singleArticle = await response.find(
        (item) => item.id === params.id
      );
      setArticle(singleArticle);
      setLoading(false);
    };

    fetchPosts();
  }, []);

  return (
    <div>
      <Container className="py-5 my-5">
        <Row>
          {loading ? <Loader /> : null}
          <h1 className="mb-3">{article.title}</h1>
          <p>{article.content}</p>
        </Row>
      </Container>
    </div>
  );
};

export default SingleArticle;
