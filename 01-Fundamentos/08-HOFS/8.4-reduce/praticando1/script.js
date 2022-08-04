// 1- Praticando array.reduce()

const membrosDeley = [
    
     {
        nome: 'Yui',
        anos: 4
    },
    {
        nome: 'Fushi',
        anos: 1
    },
    {
        nome: 'Mahina',
        anos: 2
    }
]
const anosTotais = membrosDeley.reduce((acc, membros) => {
    if(membros.anos >= 2){
    }
    return membros;
})

console.log(anosTotais)