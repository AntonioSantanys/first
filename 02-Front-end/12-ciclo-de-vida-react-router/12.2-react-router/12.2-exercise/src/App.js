import React from "react";
import Home from "./components/Home";
import List from "./components/ListPage";
import { BrowserRouter, Route } from "react-router-dom";

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <Route exact path="/list/:ship" render={(props) => <List {...props} name="Escuridão" />} />
        <Route exact path="/home" component={Home} />
      </BrowserRouter>
    )
  }
}

export default App;
