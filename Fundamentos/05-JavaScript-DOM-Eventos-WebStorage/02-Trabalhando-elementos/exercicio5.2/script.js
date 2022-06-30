let elementH1 = document.createElement('hi');
elementH1.innerText = 'Exercício 5.2 - JavaScript DOM';
document.body.appendChild(elementH1);


let elementMain = document.createElement('main');
elementMain.className = 'main-content';
document.body.appendChild(elementMain);


let filhoElementMain = document.createElement('section');
elementMain.appendChild(filhoElementMain)

console.log(document.body.childNodes);

