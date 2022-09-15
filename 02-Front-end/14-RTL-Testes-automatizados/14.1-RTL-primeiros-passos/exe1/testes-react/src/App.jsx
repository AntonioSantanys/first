import React from "react";
import { BrowserRouter, Switch, Route, Router } from "react-router-dom";
import CentralPage from "./components/pages/CentralPage";
import InformationPage from "./components/pages/InformationPage";
import Login from "./components/Login";

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <h4>Testes</h4>
        <Switch>
          <Route exact path="/" component={Login} />
          <Route path="/central" component={CentralPage} />
          <Route path="/information" component={InformationPage} />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;