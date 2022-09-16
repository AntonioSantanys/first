import React from "react";
import Header from "../Header";

class Central extends React.Component {
  render() {
    return (
      <div data-testid="div-central-page">
        <Header />
        <h3>Home</h3>
        <span>Faça sua pesquisa</span>
      </div>
    )
  }
}

export default Central;