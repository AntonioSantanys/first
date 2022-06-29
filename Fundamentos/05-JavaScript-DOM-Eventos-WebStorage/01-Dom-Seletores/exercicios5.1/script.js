

//         Aqui você vai modificar os elementos já existentes utilizando apenas as funções:
//         - document.getElementById()
//         - document.getElementsByClassName()
//         - document.getElementsByTagName()
//  Crie uma função que mude o texto na tag <p>-----</p> para uma descrição de como você se vê daqui a 2 anos. (Não gaste tempo pensando no texto e sim realizando o exercício)
//  Crie uma função que mude a cor do quadrado amarelo para o verde (rgb(76,164,109)).
//  Crie uma função que mude a cor do quadrado vermelho para branco.
//  Crie uma função que corrija o texto da tag <h1>.
//  Crie uma função que modifique todo o texto da tag <p> para maiúsculo.
//  Crie uma função que exiba o conteúdo de todas as tags <p> no console.

let paragrafo = document.getElementsByTagName('p')[1];
function paragraph(let) {

    paragrafo.innerText = 'Sou fyoas'
    return paragrafo;
}

paragraph(paragrafo)


let backGroundH = document.getElementsByClassName('main-content')[0];

function backGroundHeader(let) {

    backGroundH.style.backgroundColor = '#4B0082';
}

backGroundHeader(backGroundH);


let backGroundS = document.getElementsByClassName('center-content')[0];

function backGroundSecao(let) {

    backGroundS.style.backgroundColor = 'white'
}

backGroundSecao(backGroundS);


let tituloP = document.getElementsByClassName('title')[0];

function tituloPrincipal(let) {

   tituloP.innerText = 'Exercício 5.1 - JavaScript'
}

tituloPrincipal(tituloP)


// Deixando a primeira frase maiúscula
let textoGrande = document.getElementsByTagName('p')[0];

function maiuscula(let) {
    textoGrande.innerHTML = textoGrande.innerHTML.toUpperCase(); 
}

maiuscula(textoGrande)
