import React from "react";
import myContext from "./context/context";

class Count extends React.Component {
  render() {
    return (
      <div>
        <myContext.Consumer>
          {
            value => {
              return (<div>
                <h2>Sua carteira: {value.money}</h2>
                <h4>Pizza: 100R$</h4>
                <button type="button" onClick={value.spendMoney}>Fazer o pedido</button>
              </div>
              )
            }
          }
        </myContext.Consumer>
      </div>
    )
  }
}

export default Count;