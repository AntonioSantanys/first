import React from "react";
import { Link } from "react-router-dom";
import Header from "./Header";

class Login extends React.Component {

  state = {
    NAME: '',
    DISABLE: true,
    BUTTON_CLICKED: false,
  }

  handleInputChange = (event) => {
    const { target } = event;
    const { value } = target;

    const MIN_CHARACTERS = 3;

    if (value.length >= MIN_CHARACTERS) {
      this.setState({
        DISABLE: false,
      })
    } else {
      this.setState({
        DISABLE: true,
      })
    }
  }

  onClickChange = () => {
    const { history } = this.props

    this.setState({
      BUTTON_CLICKED: true,
    })

    history.push("/central")
  }

  render() {

    const { DISABLE } = this.state

    return (
      <div data-testid="div-login-page">
        <Header />
        <form>
          <label htmlFor="input-name">
            Nome:
            <input
              data-testid="input-name"
              id="input-name"
              type="text"
              placeholder="Digite seu nome"
              onInput={this.handleInputChange}
            />
          </label>
          <button
            type="submit"
            data-testid="button-submit-login"
            onClick={this.onClickChange}
            disabled={DISABLE}
          >
            Entrar
          </button>
        </form>
        <Link to="/informations">Informações</Link>
      </div>
    )
  }
}

export default Login;

