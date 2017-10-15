import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import "normalize.css/normalize.css";
import "./styles/styles.scss";

const dashboard = () => <div>dashboard page</div>;
const create = () => <div>create page</div>;
const edit = () => <div>edit page</div>;
const help = () => <div>help page</div>;
const notFound = () => <div>not found</div>;

const routes = (
  <BrowserRouter>
    <Switch>
      <Route path="/" component={dashboard} exact={true} />
      <Route path="/create" component={create} />
      <Route path="/edit" component={edit} />
      <Route path="/help" component={help} />
      <Route component={notFound} />
    </Switch>
  </BrowserRouter>
);

ReactDOM.render(routes, document.getElementById("app"));
