// Bloco 8.3 - array.filter

// O código abaixo imprime no console os elementos que são divísiveis por 3 e os que não são, a posição e o array:

let arrNumbers = [1, 2, 3, 4, 5, 6];

arrNumbers.filter((element, index, array) => {
    console.log(`Elemento: ${element} na posição [${index}] da lista -> ${array}`);
    element % 3 === 0 ? console.log(`[${element}] = é Divisível por 3`) : console.log(`[${element}] = não é divisível por 3`)
})

console.log('---------------------- [Próximo] ----------------------');

// O codigo abaixo retorna um array de objetos dos alunos aprovados e dos alunos reprovados:

const studentNotes = [
    {
        nome: 'Antonio',
        nota: 80
    },

    {
        nome: 'Carolina',
        nota: 90
    },

    {
        nome: 'Carlos',
        nota: 100
    },

    {
        nome: 'Rodrigo',
        nota: 60
    },

    {
        nome: 'Maria',
        nota: 40
    }

];

let aprovedPeoples = studentNotes.filter((element) => element.nota >= 70);
console.log('Aprovados:', aprovedPeoples);

let reprovedPeoples = studentNotes.filter((element) => !(element.nota >= 70));
console.log('Reprovados:', reprovedmPeoples);