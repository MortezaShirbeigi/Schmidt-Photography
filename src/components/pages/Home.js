import React from "react";

import Wrapper from "../../hoc/Wrapper";
import Slider from "../Slider/Slider";
import About from "../About/About";
import Shop from "../Shop/Shop";
import RecentArticles from "../RecentArticles/RecentArticles";

const Home = () => {
  return (
    <Wrapper>
      <Slider />
      <About />
      <Shop />
      <RecentArticles />
    </Wrapper>
  );
};

export default Home;
