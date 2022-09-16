import React from "react";
import { Route, Switch } from "react-router-dom";
import Login from "./components/Login";
import Central from "./components/pages/Central";
import Informations from "./components/pages/Informations";

export default class App extends React.Component {
  render() {
    return (
        <Switch>
          <Route exact path="/" component={Login} />
          <Route path="/central" component={Central} />
          <Route path="/informations" component={Informations} />
        </Switch>
    )
  }
}