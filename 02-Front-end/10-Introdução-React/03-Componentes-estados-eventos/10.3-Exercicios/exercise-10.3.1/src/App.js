import React from 'react';

function handleClick1() {
  console.log('Clicked! 1°')
}

function handleClick2() {
  console.log('Clicked! 2°')
}

function handleClick3() {
  console.log('Clicked! 3°')
}

class App extends React.Component {
  render() {
    return (
      <div>
        <button onClick={handleClick1}>Click Here 1°!</button>
        <button onClick={handleClick2}>Click Here 2°!</button>
        <button onClick={handleClick3}>Click Here 3°!</button>
      </div>
    );
  };
};

export default App;
