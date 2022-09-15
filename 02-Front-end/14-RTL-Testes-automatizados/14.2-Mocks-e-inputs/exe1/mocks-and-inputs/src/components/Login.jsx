import React from "react";
import Header from "./Header";

export default class Login extends React.Component {
  render() {
    return (
      <div data-testid="login-page">
        <Header />
        <h2>Login</h2>
        <label htmlFor="input-name">
          Nome:
          <input
            type="text"
            id="input-name"
            placeholder="Digite seu nome"
          />
        </label>
        <button
          type="submit"
          data-testid="button-login"
        >
          Entrar
        </button>
      </div>
    )
  }
}