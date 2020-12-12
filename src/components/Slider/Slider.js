import React from "react";
import { Carousel, CarouselItem } from "react-bootstrap";
import PROJECT_URL from "../../configs/PROJECT_URL";
import "./Slider.scss";
const Slider = () => {
  return (
    <Carousel indicators={false} touch={true}>
      <CarouselItem interval={5000}>
        <img
          className="w-100 d-block"
          src={`${PROJECT_URL}assets/images/slider1.png`}
          alt="First slide"
        />
      </CarouselItem>
      <CarouselItem interval={5000}>
        <img
          className="w-100 d-block"
          src={`${PROJECT_URL}assets/images/slider2.png`}
          alt="Second slide"
        />
      </CarouselItem>
    </Carousel>
  );
};

export default Slider;
