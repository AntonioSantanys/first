// let info = {
//     personagem: 'Margarida',
//     origem: 'Pato Donald',
//     nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
//     recorrente: 'Sim',
// };

// let info2 = {
//     personagem: 'Tio Patinhas',
//     origem: "Christmas on Bear Mountain, Dell's Four Color Comics #178",
//     nota: 'O último MacPatinhas',
//     recorrente: 'Sim',
// };

// for (let key in info){

//      if(key === 'recorrente' && info[key] === 'Sim' && info[key] === 'Sim') {

//         console.log('Ambos recorrentes')
//      } else {
//         console.log(info[key] + ' e ' + info2[key])
//      }

// }

let leitor = {
    nome: 'Julia',
    sobrenome: 'Pessoa',
    idade: 21,
    livrosFavoritos: [
      {
        titulo: 'O Pior Dia de Todos',
        autor: 'Daniela Kopsch',
        editora: 'Tordesilhas',
      },
    ],
  };

// Código abaixo irá adicionar um novo objeto no array do objeto "livrosFavoritos"
let livro2 = leitor.livrosFavoritos.push(

    {
        titulo: 'Harry Potter e o Prisioneiro de Azkaban',
        autor: 'JK Rowling',
        editora: 'Rocco',
      }


)

// 8 - Acesse as chaves nome e livrosFavoritos e 
// faça um console.log no seguinte formato: "Julia tem 2 livros favoritos".

console.log(`${leitor.nome} tem ${leitor.livrosFavoritos.length} livros favoritos`)