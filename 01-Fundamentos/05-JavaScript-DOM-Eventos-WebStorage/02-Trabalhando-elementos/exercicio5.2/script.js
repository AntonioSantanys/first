let elementH1 = document.createElement('hi');
elementH1.innerText = 'Exercício 5.2 - JavaScript DOM';
document.body.appendChild(elementH1);


let elementMain = document.createElement('main');
elementMain.className = 'main-content';
document.body.appendChild(elementMain);


let filhoElementMain = document.createElement('section');
elementMain.appendChild(filhoElementMain).className = 'center-content';


let paragraphFilhoElementMain = document.createElement('p');
filhoElementMain.appendChild(paragraphFilhoElementMain).innerText = 'Paragraph Element Main';

let segundoFilhoElementMain = document.createElement('section');
elementMain.appendChild(segundoFilhoElementMain).className = 'left-content';


let terceiroFilhoElementMain = document.createElement('section0');
elementMain.appendChild(terceiroFilhoElementMain).className = 'right-content';


let filhoImageSegundoFIlhoElementMain = document.createElement('img');
segundoFilhoElementMain.appendChild(filhoElementMain).className = 'small-image';
filhoImageSegundoFIlhoElementMain.src = 'https://picsum.photos/200';


let elementListaRightContentUl = document.createElement('ul');
terceiroFilhoElementMain.appendChild(elementListaRightContentUl);

let numeros = ['um', 'dois', 'três', 'quatro', 'cinco', 'seis', 'sete', 'oito', 'nove', 'dez'];

for(let i in numeros){
   let elementLi = document.createElement('li');
   elementLi.innerHTML = numeros[i];
   elementListaRightContentUl.appendChild(elementLi);
};


for(let i = 0; i <= 2; i += 1){

   let elementH3 = document.createElement('h3');
   elementH3.innerHTML = 'Títulos aqui';
   elementMain.appendChild(elementH3);
};





