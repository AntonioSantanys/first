const currentHour = 4;
let message;

if (currentHour >= 22) {

    message = "Não deveríamos comer nada, hora de mimir ;)"
} else if (currentHour < 22 && currentHour >= 18) {

    message = "Rango da noite :D"
} else if (currentHour < 18 && currentHour >= 14) {

    message = "Vou fazer um bolinho :)"
} else if (currentHour < 14 && currentHour >= 11) {

    message = "Hora do almoço"
} else if (currentHour >= 4 && currentHour < 11) {

    message = "Café da manhã"
}

console.log(message)