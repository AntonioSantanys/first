
// 1 - Crie uma função que receba uma string e retorne true se for um palíndromo, ou false, se não for.

function verificar(string) {
    let reverse = string.split('').reverse().join('')
                                    
      if(reverse === string) {

        return true;
      } else {

        return false
      }


}

console.log(verificar('arara'))