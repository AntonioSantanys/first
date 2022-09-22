import React from "react";
import Header from "../Header";
class CentralPage extends React.Component {

  render() {
    return (
      <div data-testid="central-page">
        <Header />
        <h2>Central</h2>
      </div>
    )
  }
}

export default CentralPage;