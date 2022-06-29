// Q1 Acesse o elemento elementoOndeVoceEsta.

let elementoOndeEsta = document.getElementById('elementoOndeVoceEsta');

// Q2 Acesse pai a partir de elementoOndeVoceEsta e adicione uma color a ele.

let elementoPai = elementoOndeEsta.parentElement;
elementoPai.style.color = 'blue';

// Q3 Acesse o primeiroFilhoDoFilho e adicione um texto a ele.

let elementoPrimeiroFilhoDoFilho = document.getElementById('primeiroFilhoDoFilho');
elementoPrimeiroFilhoDoFilho.innerText = 'Texto do elemento "primeiroFilhoDoFilho"';

// Q4 Acesse o primeiroFilho a partir de pai.

console.log(document.getElementById('pai').firstElementChild);

// Q5 Agora acesse o primeiroFilho a partir de elementoOndeVoceEsta.

console.log(elementoOndeEsta.firstElementChild);

// Q6 Agora acesse o texto Atenção! a partir de elementoOndeVoceEsta.

console.log(elementoOndeEsta.nextSibling);

// Q7 Agora acesse o terceiroFilho a partir de elementoOndeVoceEsta.

console.log(elementoOndeEsta.nextSibling.nextSibling);

// Q8 Agora acesse o terceiroFilho a partir de pai.

let terceiroFilhoPai = document.getElementById('pai');
console.log(terceiroFilhoPai.lastElementChild.previousElementSibling);
