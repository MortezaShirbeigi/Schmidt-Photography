import "./App.scss";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Layout from "../Layout/Layout";
import Home from "../pages/Home";
import About from "../pages/About";
import Contact from "../pages/Contact";

const App = () => {
  return (
    <BrowserRouter>
      <Layout>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/about" component={About} />
          <Route exact path="/contact" component={Contact} />
        </Switch>
      </Layout>
    </BrowserRouter>
  );
};

export default App;
