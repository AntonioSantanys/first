import React from 'react';
import { render, screen } from '@testing-library/react';
import App from '../App';

test('Verifica se o componente App.js renderiza um input do tipo email', () => {
  render(<App />);

  const inputEmail = screen.getByTestId("input-email");

  expect(inputEmail).toBeInTheDocument();
  expect(inputEmail.type).toBe("email")
});

test('Verifica se o componente App.js renderiza um botão do tipo submit', () => {
  render(<App />);

  const buttonSend = screen.getAllByRole("submit");

  expect(buttonSend).toHaveLength(3);
});

test('Verifica se o componente App.js renderiza um botão de informações e se é do tipo submit', () => {
  render(<App />);

  const buttonInformation = screen.getByTestId("button-information");

  expect(buttonInformation).toBeInTheDocument();
  expect(buttonInformation.type).toBe("submit");
});


// Acessar os elementos da tela

// Interagir com os elementos

// Fazer os testes