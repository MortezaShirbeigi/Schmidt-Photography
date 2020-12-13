import React, { useState, useEffect } from "react";
import { Container, Row, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import Articles from "../Articles/Articles";
import axios from "axios";

const RecentArticles = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);

  const loadArticle = () => {
    setLoading(true);
    axios
      .get("https://run.mocky.io/v3/e24a7338-0902-458a-9754-0bc88efbd6d2")
      .then((response) => {
        setLoading(false);
        setPosts(response.data);
      });
  };

  useEffect(() => {
    loadArticle();
  }, []);

  return (
    <Container className="my-5 py-5">
      <Row className="justify-content-center">
        <h2 className="mb-5">Recent Articles</h2>
      </Row>
      <Articles mdColumn={4} loading={loading} posts={posts.splice(0, 3)} />
      <Row className="justify-content-center">
        <Link to="/blog" className="nav-link">
          <Button
            className="mt-4 recent-articles-btn"
            variant="outline-secondary"
          >
            View More
          </Button>
        </Link>
      </Row>
    </Container>
  );
};

export default RecentArticles;
