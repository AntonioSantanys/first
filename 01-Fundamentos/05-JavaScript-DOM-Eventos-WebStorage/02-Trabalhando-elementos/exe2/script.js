let pai = document.getElementById('pai');
let irmaoNovoElementoOndeVoceEsta = document.createElement('section');
pai.appendChild(irmaoNovoElementoOndeVoceEsta);

console.log(pai);

let elementOndeVoceEsta = document.getElementById('elementoOndeVoceEsta');
let filhoElementOndeVoceEsta = document.createElement('section');
elementOndeVoceEsta.appendChild(filhoElementOndeVoceEsta);

console.log(elementOndeVoceEsta);


let elementPrimeiroFilhoDoFilho = document.getElementById('primeiroFilhoDoFilho');
let filhoPrimeiroFilhoDoFilho = document.createElement('section');
elementPrimeiroFilhoDoFilho.appendChild(filhoPrimeiroFilhoDoFilho);

console.log(elementPrimeiroFilhoDoFilho);


let elementTerceiroFilho = filhoPrimeiroFilhoDoFilho.parentElement.parentElement.parentElement.lastChild.previousElementSibling.previousElementSibling;


console.log(elementTerceiroFilho)
