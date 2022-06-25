
// 2 - Crie uma função que receba um array de inteiros e retorne o índice do maior valor.
function maiorValor(numeros) {
    let maior = 0;

    for (let i in numeros) {

        if(numeros[maior] < numeros[i]) {

            maior = i;
        }
   }

   return maior;
}

console.log(maiorValor([2, 3, 6, 7, 10, 1]));