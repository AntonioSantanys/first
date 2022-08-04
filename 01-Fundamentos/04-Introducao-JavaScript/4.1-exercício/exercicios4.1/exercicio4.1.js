const a = 12;
const b = 4;
const c = 32;

// 1-Faça cinco programas, um para cada operação aritmética básica. Seu programa deve ter duas constantes, a e b, definidas no começo com os valores que serão operados.

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

// 2-Faça um programa que retorne o maior de dois números. Defina no começo do programa duas constantes com os valores que serão comparados.


if (a > b) {

    console.log(a);
} else {

    console.log(b);
}

// 3-Faça um programa que retorne o maior de três números. Defina no começo do programa três constantes com os valores que serão comparados.


if (a > b && a > c) {

    console.log(a);
} else if (b > a && b > c) {

    console.log(b);
} else {

    console.log(c);
}

// 4-Faça um programa que, dado um valor definido numa constante, retorne "positive" se esse valor for positivo, "negative" se for negativo e "zero" caso contrário.

if (a >= 1) {

    console.log("positive");
} else if (a <= -1) {

    console.log("negative");
} else {

    console.log("zero");
}

// 5-Faça um programa que defina três constantes com os valores dos três ângulos internos de um triângulo. Retorne true se os ângulos representarem os ângulos de um triângulo e false, caso contrário. Se algum ângulo for inválido o programa deve retornar uma mensagem de erro.

const angulo1 = 60;
const angulo2 = 45;
const angulo3 = 60;
let perimeter = angulo1 + angulo2 + angulo3;

if (perimeter === 180) {

    console.log(true);
} else {

    console.log(false);
}

// 6-Escreva um programa que receba o nome de uma peça de xadrez e retorne os movimentos que ela faz.


const peao = "1 CASA";

console.log(peao.toLocaleLowerCase());

// 7-Escreva um programa que converte uma nota dada em porcentagem (de 0 a 100) em conceitos de A a F 

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

// 8-Escreva um programa que defina três números em constantes e retorne true se pelo menos uma das três for par. Caso contrário, ele retorna false.
// Bonus: use somente um if.


const num1 = 10;
const num2 = 9;
const num3 = 3;

if (num1 % 2 || num2 % 2 || num3 % 2) {

    console.log(true);
} else {

    console.log(false);
}

// 9-Escreva um programa que defina três números em constantes e retorne true se pelo menos uma das três for ímpar. Caso contrário, ele retorna false.
// Bonus: use somente um if.

const num4 = 10;
const num5 = 22;
const num6 = 12;

if (num4 % 1 || num5 % 1 || num6 % 1) {

    console.log(true);
} else {

    console.log(false);
}

// 10-Escreva um programa que se inicie com dois valores em duas constantes diferentes: o custo de um produto e seu valor de venda. A partir dos valores, calcule quanto de lucro (valor de venda descontado o custo do produto) a empresa terá ao vender mil desses produtos.

const custo = 45;
const valor = 60;
let imposto = custo + 6;
let quantidade = 1000
let valorCustoTotal = valor + imposto;
let lucro = valor - valorCustoTotal;
let lucroTotal = lucro * quantidade;

if (lucroTotal > 0) {


    console.log(lucroTotal);
} else {

    console.log("Error, não obiteve lucro.");
}

// 11-Uma pessoa que trabalha de carteira assinada no Brasil tem descontados de seu salário bruto o INSS e o IR. Faça um programa que, dado um salário bruto, calcule o líquido a ser recebido.

const salarioBruto = 15400.50;
let INSS;
let IR;
let salarioBase = salarioBruto - INSS;

if (salarioBruto <= 1556.94) {

    INSS = salarioBruto / 8;
    console.log(INSS);
} else if (salarioBruto < 2594.92) {

    INSS = salarioBruto / 9;
    console.log(INSS);
} else if (salarioBruto < 5189.82) {

    INSS = salarioBruto / 11;
    console.log(INSS);
} else {

    INSS = salarioBruto - 570.88;
    console.log(INSS)
}

if (salarioBase <= 1903.98) {

    console.log("Isento de imposto de reda");
} else if (salarioBase < 2826.65) {

    IR = (INSS / 7.5) - 142.80;
    console.log(IR);
} else if (salarioBase < 2826.65) {

    IR = (INSS / 15) - 354.80;
    console.log(IR);
} else if (salarioBase < 3.751,05) {

    IR = (INSS / 22.5) - 636.13;
    console.log(IR);
} else {

    IR = (INSS / 27.5) - 869.36;
    console.log(IR);
}
