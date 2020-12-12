import React from "react";

import Wrapper from "../../hoc/Wrapper";
import Slider from "../Slider/Slider";
import About from "../About/About";
import Shop from "../Shop/Shop";

const Home = () => {
  return (
    <Wrapper>
      <Slider />
      <About />
      <Shop />
    </Wrapper>
  );
};

export default Home;
