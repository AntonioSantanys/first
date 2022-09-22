import React from "react";
import { createUser } from "../services/UserApi";

class Login extends React.Component {

  state = {
    USER_NAME: '',
    USER_EMAIL: '',
    BUTTON_CLICKED: false,
    DISABLE: true,
    LOADING: false,
  }

  onInputChange = (event) => {
    const { target } = event;
    const { value } = target;

    const MIN_CHARACTERS = 3;

    if (value.length >= MIN_CHARACTERS) {
      this.setState({
        USER_NAME: value,
        DISABLE: false,
      })
    } else {
      this.setState({
        DISABLE: true,
      })
    }
  }

  onClickChangeLogin = async () => {
    const { USER_NAME: name } = this.state
    const { history } = this.props

    this.setState({
      BUTTON_CLICKED: true,
      LOADING: true,
    })
    await createUser({ name })
    history.push('/central');
  }

  onClickChangeInfo = () => {

    const { history } = this.props

    this.setState({
      BUTTON_CLICKED: true,
    })

    history.push('/information');
  }

  render() {

    const { DISABLE } = this.state

    return (
      <div>
        <label htmlFor="input-name">
          Name:
          <input
            data-testid="input-name"
            type="name"
            name="Name"
            id="input-name"
            onInput={this.onInputChange}
          />
        </label>
        <br />
        <label htmlFor="input-email">
          Email:
          <input
            data-testid="input-email"
            type="email"
            name="Email"
            id="input-email"
          />
        </label>
        <br />
        <button
          type="submit"
          data-testid="button-login"
          onClick={this.onClickChangeLogin}
          disabled={DISABLE}
        >
          Login
        </button>
        <button
          type="submit"
          data-testid="button-back"
        >
          Voltar
        </button>
        <button
          type="submit"
          data-testid="button-information"
          onClick={this.onClickChangeInfo}
        >
          Informações
        </button>
      </div>
    );
  }
}

export default Login;