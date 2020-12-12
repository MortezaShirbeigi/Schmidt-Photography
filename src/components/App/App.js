import "./App.scss";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Layout from "../Layout/Layout";
import Home from "../pages/Home";

const App = () => {
  return (
    <BrowserRouter>
      <Layout>
        <Switch>
          <Route exact path="/" component={Home} />
        </Switch>
      </Layout>
    </BrowserRouter>
  );
};

export default App;
