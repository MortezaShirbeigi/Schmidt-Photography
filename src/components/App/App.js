import "./App.scss";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Layout from "../Layout/Layout";
import Home from "../pages/Home";
import About from "../pages/About";

const App = () => {
  return (
    <BrowserRouter>
      <Layout>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/about" component={About} />
        </Switch>
      </Layout>
    </BrowserRouter>
  );
};

export default App;
