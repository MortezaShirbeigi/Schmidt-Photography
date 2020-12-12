import React from "react";
import { Container, Row, Col, Image } from "react-bootstrap";
import PROJECT_URL from "../../configs/PROJECT_URL";
import PageLocation from "../PageLocation/PageLocation";
import Wrapper from "../../hoc/Wrapper";

const About = () => {
  return (
    <Wrapper>
      <PageLocation />
      <Container className="my-5 py-5">
        <Row>
          <Col className="d-flex flex-column justify-content-center text-center text-lg-left">
            <h1>About Müller Schmidt</h1>
            <p className="text-justify pb-4 pb-lg-0">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Leo risus
              eu sed non. Turpis nisl, lacus dignissim a congue id lacus, metus
              vel. Pharetra tempus varius eget feugiat quam pretium, malesuada
              nisi pulvinar. Suspendisse et semper sed odio venenatis interdum
              enim venenatis. Sed mattis neque tempus duis mi faucibus. At
              potenti eu magna scelerisque. Cras turpis dolor, feugiat
              consectetur maecenas et ultricies egestas ornare. Nunc duis mattis
              nisl elementum id volutpat at at amet. Ante quis augue elit
              viverra. Vitae eget lectus aliquet cursus ut lacus, vestibulum
              fusce ac. Blandit pharetra integer fringilla netus donec amet,
              amet. Viverra viverra placerat id cursus tempus ut viverra turpis
              sit.
              <br />
              Libero leo suspendisse sed porttitor lorem lectus viverra.
              Vulputate elementum quis penatibus pharetra tellus feugiat
              vivamus. Imperdiet vulputate fermentum praesent senectus morbi
              neque sem. Consequat convallis enim, urna in ullamcorper varius
              laoreet fames. Nisi, ac eget penatibus tempor, quisque eget
              egestas. Pellentesque condimentum egestas interdum posuere feugiat
              quam. Sapien in sed pretium nec vestibulum. Elementum eget in
              purus tortor, platea fermentum vitae. Sociis at velit maecenas
              nunc diam tellus maecenas nisi. Quam et quis etiam lorem volutpat.
              Dignissim amet pellentesque eget eget.
            </p>
          </Col>
          <Col className="text-center" lg={{ span: 4 }}>
            <Image
              src={`${PROJECT_URL}assets/images/Müller-Schmidt.png`}
              alt="about me"
              fluid
              rounded
            />
          </Col>
        </Row>
        <Row className="flex-column justify-content-center text-center text-lg-left mt-5 pt-5">
          <h1>I capture memories</h1>
          <p className="text-justify pb-4 pb-lg-0">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tortor
            adipiscing viverra id vitae maecenas tincidunt imperdiet ac est.
            Amet, leo facilisi sollicitudin est. Tristique egestas ac semper id
            malesuada porttitor. Praesent imperdiet nam imperdiet fermentum
            sapien ac. Tellus urna, et sit tristique maecenas nulla lectus. Sed
            nec quis egestas volutpat quam ultricies hac leo vitae. Tincidunt
            mollis volutpat nisl nisi volutpat, id condimentum duis
            pellentesque. Sed vehicula in nunc, lacinia fames. Feugiat quam
            turpis nam bibendum pharetra duis quam. Quam duis enim duis massa.
            Pharetra dolor, consectetur eu malesuada tortor aliquet consequat
            semper tortor. Massa vitae a, quam dui, fermentum in netus. Nibh
            massa urna amet egestas ut vestibulum. Egestas aliquet eget
            vestibulum quisque vestibulum, sed. Et urna dolor cras amet.
            Pharetra amet quis vitae aliquam. Egestas sodales a enim cursus.
            Dictum pretium ac senectus in pharetra habitasse quam viverra. Urna,
            tellus quisque dictumst auctor praesent massa elementum massa, id.
            Urna, consequat lobortis justo, scelerisque sit quam. Elementum
            tellus, non velit lacus, donec ac sapien neque non. Porta malesuada
            imperdiet ornare risus commodo commodo mauris ullamcorper aliquet.
            Est, lectus odio nunc luctus ipsum placerat habitasse. Quis quis id
            elementum urna et amet. Et, est risus suscipit neque est tempor et,
            donec. Sapien at ipsum eget nunc rhoncus, commodo a, luctus. Arcu
            etiam at at quam.
          </p>
        </Row>
      </Container>
    </Wrapper>
  );
};

export default About;
