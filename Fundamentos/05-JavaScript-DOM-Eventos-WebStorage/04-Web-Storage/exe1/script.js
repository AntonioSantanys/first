// document.cookie = 'email=antonionetosg3@gmail.com; expires=Thu, 17 Dec 2022 12:00:00 UTC; path=/';
// document.cookie = 'email=; expires=Tue, 01 Dec 2020 12:00:00 UTC;' // Deletando um cookie colocando uma data que já expirou
// var myCookie = document.cookie;

// // expires=Thu, 17 Dec 2022 12:00:00 UTC; path= 
// console.log(myCookie)

console.log('+=====+Local Storage+=====+')
localStorage.setItem('primeiroNome', 'Antônio');
localStorage.setItem('sobreNome', 'Santana');

localStorage.removeItem('primeiroNome');

console.log(localStorage.getItem('primeiroNome') + ' ' + localStorage.getItem('sobreNome'))

localStorage.clear(); // limpa todas as entradas salvas em localStorage

console.log(localStorage.length)


// Session storage salva os dados e exclue assim que o usuário fecha a aba ou o browser

console.log('+=====+Session Storage+=====+');
sessionStorage.setItem('idade', 18);
sessionStorage.setItem('altura', 174);

sessionStorage.removeItem('idade');

console.log(sessionStorage.getItem('idade'), 'years', '', sessionStorage.getItem('altura'), 'cm');

console.log(sessionStorage.length);

sessionStorage.clear(); // Limpa todas as entradas salvas em sessionStorage
console.log(sessionStorage.length); // Não possui nada salvo, então o retorno é o valor: 0

console.log('+=====+JSON.string e JSON.parse+=====+');

const myObj = {
    name: 'David',
    age: 16,
};

// Precisamos transformar este objeto em uma string. Para isso, utilizamos a função `JSON.stringify()`.

let dadoHut = localStorage.setItem('myData', JSON.stringify(myObj));

// Como dito anteriormente, o `localStorage` armazena dados no formato chave e valor, sendo os valores sempre string. Para isso, precisamos passar como primeiro parâmetro do método `setItem()` o nome da chave, passamos `myData` e como segundo parâmetro, a função `JSON.stringify()` com o objeto-valor que queremos armazenar na chave `myData`. Feito isso, teremos salvo no `localStorage` um objeto com a chave `myData` e o valor `{ "name": "Link", "age": 20 }`.

// Agora, precisamos recuperar o objeto armazenado, mas queremos ele no formato original e não como uma string. Para isso, utilizaremos a função `JSON.parse()`.

const recoveredObject = JSON.parse(localStorage.getItem('myData'));

// Utilizamos a função `JSON.parse()` para transformar a string que está armazenada no `localStorage` de volta para seu formato original, um objeto.

console.log(recoveredObject); // { name: 'Link', age: 20 }