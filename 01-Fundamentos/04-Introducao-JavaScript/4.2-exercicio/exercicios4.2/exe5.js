// 5- Utilizando for, descubra qual o maior valor contido no array e imprima-o;

// let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
// let maior = 0;

// for (let i = 0; i < numbers.length; i += 1) {
//     if(numbers[i] > maior) {

//         maior = numbers[i];
//     }
// }

// console.log(maior);

// let arr = [-1, -1, -2];
// var max = arr.reduce(function (a, b) {
//     return Math.max(a, b);
// }, -Infinity);

// console.log(max)




function highestCount(array) {
    let maiorNumero = [];
    let repetido = 0;
    for (let i = 0; i <= array.length; i += 1) {

        if (array[i] >= maiorNumero) {

            maiorNumero = array[i]
            repetido += 1;
        }
    }
    return repetido;
}
let arr = [-1, -1, -2];
console.log(highestCount(arr))