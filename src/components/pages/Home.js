import React from "react";

import Wrapper from "../../hoc/Wrapper";
import Slider from "../Slider/Slider";
import About from "../About/About";

const Home = () => {
  return (
    <Wrapper>
      <Slider />
      <About />
    </Wrapper>
  );
};

export default Home;
