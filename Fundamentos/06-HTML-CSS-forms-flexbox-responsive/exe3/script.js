// let button = document.querySelector('#button-submit');
// let inputNameUser = document.querySelector('#input-name');
// let nameUser = document.querySelector('#name-user');

// function getUserValue(event) {
//     event.preventDefault();
//     console.log(inputNameUser.value);
//     nameUser.innerHTML = inputNameUser.value;
// }

// button.addEventListener('click', getUserValue)

// SELETORES
const INPUT_TEXT = document.querySelector("#input-text");
const INPUT_CHECKBOX = document.querySelector("#input-checkbox");
const HREF_LINK = document.querySelector("#href");

function impedirLink(event) {

   event.preventDefault();
}

HREF_LINK.addEventListener('click', impedirLink);

function impedirCheckBox(event) {

    event.preventDefault();
}

INPUT_CHECKBOX.addEventListener('click', impedirCheckBox);

function impedirText(event) {

    event.preventDefault();
}

INPUT_TEXT.addEventListener('keypress', impedirText)