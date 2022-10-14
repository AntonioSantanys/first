import React from "react";
import Count from "./components/Count";
import myContext from "./components/context/context";

export default class Main extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      money: 1000,
    }

    this.handleSpendMoney = this.handleSpendMoney.bind(this);
  }

  handleSpendMoney() {
    if (this.state.money > 0) {
      this.setState((prevState) => ({
        money: prevState.money - 100,
      }))
    } else {
      this.setState({
        money: 0,
      })
    }
  };

  render() {
    const contextValue = {
      money: this.state.money,
      spendMoney: this.handleSpendMoney,
    }
    return (
      <myContext.Provider value={contextValue}>
        <div>
          Main
          <Count />
        </div>
      </myContext.Provider>
    );
  };
};