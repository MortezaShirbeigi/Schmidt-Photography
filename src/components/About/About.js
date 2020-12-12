import React from "react";
import { Container, Row, Col, Image } from "react-bootstrap";
import PROJECT_URL from "../../configs/PROJECT_URL";

const About = () => {
  return (
    <Container className="my-5 py-5">
      <Row>
        <Col className="d-flex flex-column justify-content-center text-center text-lg-left">
          <h1>About Müller Schmidt</h1>
          <p className="text-justify pb-4 pb-lg-0">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. In nulla
            facilisis augue sed semper consequat luctus. Donec pulvinar semper
            leo, nunc cursus lectus pretium. Nec venenatis ipsum tempus turpis
            magna. A commodo massa arcu justo sed eget id velit. Condimentum ut
            integer sagittis magna arcu. Posuere elementum habitant fringilla
            accumsan scelerisque nunc gravida faucibus. Dictum non, ut tempus,
            non. Feugiat sed turpis mauris quam arcu lectus id tortor cursus.
            Sit auctor vivamus eu, lorem sit convallis cras ultricies. Cursus
            orci, morbi sit tristique cras.
          </p>
        </Col>
        <Col className="text-center" lg={{ span: 3 }}>
          <Image
            src={`${PROJECT_URL}assets/images/Müller-Schmidt.png`}
            alt="about me"
            fluid
            rounded
          />
        </Col>
      </Row>
    </Container>
  );
};

export default About;
