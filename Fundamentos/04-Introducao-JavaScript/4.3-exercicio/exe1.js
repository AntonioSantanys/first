// 1- O fatorial é a multiplicação de um número natural pelos seus antecessores, exceto o zero. Por exemplo:
// Com base nessas informações, crie um algoritmo que retorne o fatorial de 10.
console.log('\n', '+------ Início do exercício 1 ------+')

let fatorial = 1;

for (let index = 1; index <= 10; index += 1) {

    fatorial *= index;
    console.log(fatorial)
}

console.log('\n', '+------ Fim do exercício 2 ------+');
// 2- Agora, desenvolva um algoritmo que é capaz de inverter uma palavra. 
console.log('\n', '+------ Início do exercício 2 ------+')

let palavra = 'Alucinação';

// Split irá reverter irá separar todos os carácteres
// Reverse irá inverter o array criado pelo split
// Join irá juntar novamente
let invertida = palavra.split("").reverse().join("");

console.log(invertida);
console.log('\n', '+------ Fim do exercício 2 ------+')

// 3- Escreva dois algoritmos: um que retorne a maior palavra deste array e outro que retorne a menor. Considere o número de caracteres de cada palavra.

let array = ['java', 'javascript', 'python', 'html', 'css'];

let biggestWord = array[0];
let smallestWord = array[0];

for (let index = 0; index < array.length; index += 1) {
  if (array[index].length > biggestWord.length) {
    biggestWord = array[index];
  }
}

for (let index = 0; index < array.length; index += 1) {
  if (array[index].length < smallestWord.length) {
    smallestWord = array[index];
  }
}

console.log(biggestWord);
console.log(smallestWord);

