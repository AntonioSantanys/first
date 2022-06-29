// Q1 Acesse o elemento elementoOndeVoceEsta.

let elementoOndeEsta = document.getElementById('elementoOndeVoceEsta');

// Q2 Acesse pai a partir de elementoOndeVoceEsta e adicione uma color a ele.

let elementoPai = elementoOndeEsta.parentElement;
elementoPai.style.color = 'blue';

// Q3 Acesse o primeiroFilhoDoFilho e adicione um texto a ele.

let elementoPrimeiroFilhoDoFilho = document.getElementById('primeiroFilhoDoFilho');
elementoPrimeiroFilhoDoFilho.innerText = 'Texto do elemento "primeiroFilhoDoFilho"';

// Q4 Acesse o primeiroFilho a partir de pai.

