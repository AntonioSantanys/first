const Redux = require('redux'); // Importando o Redux

const fazerLogin = (email) => ({
  type: "LOGIN",
  email,
});

const ESTADO_INICIAL = {
  login: false,
  email: "",
};

const reducer = (state = { login: false, email: '' }, action) => {

  switch (action.type) {
    case "LOGIN":
      return {
        ...state,
        login: !state.login,
        email: action.email,
      };
    default: // No switch, sempre precisamos ter um caso default!
      return state
  }


};

const store = Redux.createStore(reducer); // Criando um store

store.dispatch(fazerLogin("alguem@gmail.com")); // Conseguimos mudar o estado da store utilizando o dispatch

console.log(store.getState());