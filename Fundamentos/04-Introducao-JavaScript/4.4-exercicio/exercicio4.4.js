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

// 6 - Acesse as chaves nome, sobrenome e titulo, que está dentro da chave livrosFavoritos, 
// e faça um console.log no seguinte formato: 
// "O livro favorito de Julia Pessoa se chama 'O Pior Dia de Todos'".


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


  console.log(`O livro favorito de ${leitor.nome} ${leitor.sobrenome} se chama: ${leitor.livrosFavoritos[0].titulo}`)