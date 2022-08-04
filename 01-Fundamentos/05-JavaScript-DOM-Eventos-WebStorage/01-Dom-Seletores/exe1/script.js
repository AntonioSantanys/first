document.getElementById("page-title").innerText = 'Água mole e pedra é dura';

document.getElementById("paragraph").style.color = 'rgb(120,23,254)';

document.getElementsByTagName("h4")[0].style.color = 'green';

let filmes = document.getElementsByClassName("series");

document.querySelector("h3").innerText = "Filmes da saga de Harry Potter"; // Retorna o primeiro da tag, id ou classe

for (let i = 0; i < filmes.length; i += 1) {
   
    filmes[i].style.backgroundColor = 'grey';
}

