import React from "react";

class App extends React.Component {
  render() {
    return (
      <div>
        <label htmlFor="input-email">
          Email
          <input
          data-testid="input-email"
           type="email"
           name="Email"
           id="input-email"
          />
          <button type="submit" data-testid="button-send">Login</button>
        </label>
      </div>
    );
  }
}

export default App;
