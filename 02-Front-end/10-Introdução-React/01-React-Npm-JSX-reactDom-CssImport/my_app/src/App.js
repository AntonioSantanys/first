import React from 'react';

const Task = (value) => {
  return (
    <li key={value}>{value}</li>
  );
}

const arrayTasks = ['Estudar', 'Trabalhar', 'Descanso'];

function App() {
  return <ul>{ arrayTasks.map( (array) => Task(array))}</ul>
}

export default App;
