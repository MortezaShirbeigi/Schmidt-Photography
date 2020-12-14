import React, { useEffect, useRef } from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import Wrapper from "../../hoc/Wrapper";
import PageLocation from "../PageLocation/PageLocation";

const Contact = () => {
  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current.focus();
  });

  return (
    <Wrapper>
      <PageLocation />
      <Container className="my-5 py-5">
        <Row>
          <Col lg={{ span: 6 }}>
            <h4>Send Message</h4>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              <br />
              Gravida semper ut et, felis mauris et.
            </p>
            <Form>
              <Form.Row>
                <Form.Group as={Col} controlId="formGridEmail">
                  <Form.Label>Your Name</Form.Label>
                  <Form.Control
                    ref={inputRef}
                    type="text"
                    placeholder="Enter Your Name"
                    autoComplete="off"
                  />
                </Form.Group>

                <Form.Group as={Col} controlId="formGridPassword">
                  <Form.Label>Your Email</Form.Label>
                  <Form.Control
                    type="Email"
                    placeholder="Enter Your Email"
                    autoComplete="off"
                  />
                </Form.Group>
              </Form.Row>
              <Form.Group controlId="exampleForm.ControlTextarea1">
                <Form.Label>Your Message</Form.Label>
                <Form.Control
                  as="textarea"
                  rows={5}
                  placeholder="Enter Your Message"
                />
              </Form.Group>
              <Button variant="secondary" type="submit" block>
                Submit
              </Button>
            </Form>
          </Col>
          <Col lg={{ span: 5, offset: 1 }}>
            <h4>Contact Information</h4>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              <br />
              Gravida semper ut et, felis mauris et.
            </p>
            <div>
              <h6>Phone</h6>
              <p>+49 (0)2241 955 8386</p>
            </div>
            <div>
              <h6>Address</h6>
              <p>Waldstraße 25</p>
              <p>53567 Asbach, Germany</p>
            </div>
            <div>
              <h6>Email</h6>
              <p>Contact@Schmidtphoto.de</p>
            </div>
          </Col>
        </Row>
      </Container>
    </Wrapper>
  );
};

export default Contact;
