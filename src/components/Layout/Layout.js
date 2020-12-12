import React from "react";
import Wrapper from "../../hoc/Wrapper";
import Header from "./Header/Header";

const Layout = ({ children }) => {
  return (
    <Wrapper>
      <Header />
      {children}
    </Wrapper>
  );
};

export default Layout;
