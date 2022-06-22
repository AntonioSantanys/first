const a = 12;
const b = 4;
const c = 32;

// 1-

let soma = a + b;
console.log(soma);

let subtracao = a - b;
console.log(subtracao);

let multiplicacao = a * b;
console.log(multiplicacao);

let divisao = a / b;
console.log(divisao);

let modulo = a % b;
console.log(modulo);

// 2-

if (a > b) {

    console.log(a);
} else {

    console.log(b);
}

// 3-

if (a > b && a > c) {

    console.log(a);
} else if (b > a && b > c) {

    console.log(b);
} else {

    console.log(c);
}

// 4-

if (a >= 1) {

    console.log("positive");
} else if (a <= -1) {

    console.log("negative");
} else {

    console.log("zero");
}

// 5-

const angulo1 = 60;
const angulo2 = 45;
const angulo3 = 60;
let perimeter = angulo1 + angulo2 + angulo3;

if (perimeter === 180) {

    console.log(true);
} else {

    console.log(false);
}

// 6-

const peao = "1 CASA";

console.log(peao.toLocaleLowerCase());

// 7- 

const porcentagem = 120;

if (porcentagem >= 90 && porcentagem <= 100) {

    console.log("A");
} else if (porcentagem >= 80 && porcentagem < 90) {

    console.log("B");
} else if (porcentagem >= 70 && porcentagem < 80) {

    console.log("C");
} else if (porcentagem >= 60 && porcentagem < 70) {

    console.log("D");
} else if (porcentagem >= 50 && porcentagem < 60) {

    console.log("E");
} else if (porcentagem < 50 && porcentagem > 0) {

    console.log("F");
} else {

    console.log("Error");
}

// 8-

const num1 = 10;
const num2 = 9;
const num3 = 3;

if (num1 % 2 || num2 % 2 || num3 % 2) {

    console.log(true);
} else {

    console.log(false);
}