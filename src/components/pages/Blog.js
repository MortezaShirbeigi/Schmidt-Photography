import React, { useState, useEffect } from "react";
import { Container, Row } from "react-bootstrap";
import axios from "axios";
import Wrapper from "../../hoc/Wrapper";
import Articles from "../Articles/Articles";
import PageLocation from "../PageLocation/PageLocation";
import PaginationItems from "../PaginationItems/PaginationItems";

const Blog = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(6);

  useEffect(() => {
    const fetchPosts = async () => {
      setLoading(true);
      const res = await axios.get(
        "https://run.mocky.io/v3/772f1622-ed0c-40d9-8f4d-764c0451b737"
      );
      setLoading(false);
      setPosts(res.data);
    };

    fetchPosts();
  }, []);

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);

  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <Wrapper>
      <PageLocation />
      <Container className="my-5 py-5">
        <Articles mdColumn={6} loading={loading} posts={currentPosts} />
        <Row className="justify-content-center">
          <PaginationItems
            paginate={paginate}
            postsPerPage={postsPerPage}
            totalPosts={posts.length}
            activebtn={paginate}
            activeNumber={currentPage}
          />
        </Row>
      </Container>
    </Wrapper>
  );
};

export default Blog;
