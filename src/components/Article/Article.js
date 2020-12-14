import React from "react";
import { Card } from "react-bootstrap";
import PROJECT_URL from "../../configs/PROJECT_URL";
import { Link } from "react-router-dom";

const Article = ({ post }) => {
  return (
    <Link key={post.id} to={`/blog/${post.id}`} className="article-link">
      <Card key={post.id} className="border-secondary">
        <div className="mask border-bottom border-secondary">
          <Card.Img
            key={post.id}
            variant="top"
            src={`${PROJECT_URL}assets/images/article1.png`}
          />
        </div>
        <Card.Text className="pl-4 py-3">{post.title}</Card.Text>
      </Card>
    </Link>
  );
};

export default Article;
