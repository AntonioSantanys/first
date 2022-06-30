let pai = document.getElementById('pai');

for (let i = pai.childNodes.length - 1; i >= 0; i -= 1) {
    let filhoAtual = pai.childNodes[i];
    if (filhoAtual.id !== 'elementoOndeVoceEsta') {

        filhoAtual.remove();
    }

}

let segundoEUltimoFilhoDoFilho = document.getElementById('segundoEUltimoFilhoDoFilho');
segundoEUltimoFilhoDoFilho.remove();
