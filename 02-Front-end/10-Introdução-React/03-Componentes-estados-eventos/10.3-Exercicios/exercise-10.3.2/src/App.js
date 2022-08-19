import React from 'react';

class App extends React.Component {

  constructor() {
    super()
    this.clickedInButton = this.clickedInButton.bind(this);
  }

  clickedInButton() {
    console.log(this);
    console.log('Cliked');
  }

  render() {
    return (
      <button onClick={this.clickedInButton}>Click Here! 2.0</button>
    );
  };
}

export default App;
