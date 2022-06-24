// Exercícios 

let player = {
    name: 'Marta',
    age: 34,

    medals: {
        golden: 2,
        silver: 3
    },
    
    bestInTheWord: {
     
       years: [2006, 2007, 2008, 2009, 2010, 2018] 
    
    }
       

    
}

console.log('O jogador(a)', player.name, 'de', player.age, 'anos')
console.log('A jogadora foi eleita a melhor do mundo', player.bestInTheWord.years.length, 'vezes')
console.log('A jogadora possui', player.medals.golden, 'medalhas de ouro e', player.medals.silver, 'medalhas de prata')

