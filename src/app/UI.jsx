import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { useContext } from "react/cjs/react.production.min";
// containers
import Layout from "../containers/Layout";
import { AppContext } from "../context/AppContext";
// pages
import Home from "../pages/Home";
import NotFound from "../pages/NotFound";

const UI = () => {
  return (
    <BrowserRouter>
      <Layout>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="*" component={NotFound} />
          </Switch>
      </Layout>
    </BrowserRouter>
  );
};

export { UI };
