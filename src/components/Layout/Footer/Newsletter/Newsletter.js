import React from "react";
import "./Newsletter.scss";
import { Form, Button, Row } from "react-bootstrap";

const Newsletter = () => {
  return (
    <Row className="flex-column px-2 px-lg-0">
      <p className="newsletter-title">
        Join the photography newsletter to receive my articles
      </p>
      <p className="newsletter-subtitle mb-4">
        you can unsubscribe at any time.
      </p>
      <Form inline className="justify-content-center">
        <Form.Control className="email-input" placeholder="Enter Your Email" />
        <Button
          className="ml-sm-3 mt-3 mt-sm-0"
          variant="outline-primary newsletter-submit"
          type="submit"
        >
          Submit
        </Button>
      </Form>
    </Row>
  );
};

export default Newsletter;
