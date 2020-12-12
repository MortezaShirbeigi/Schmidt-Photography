import React from "react";
import Wrapper from "../../hoc/Wrapper";
import Header from "./Header/Header";
import Footer from "./Footer/Footer";

const Layout = ({ children }) => {
  return (
    <Wrapper>
      <Header />
      {children}
      <Footer />
    </Wrapper>
  );
};

export default Layout;
