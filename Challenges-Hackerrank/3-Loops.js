/*Tarefa

Complete a função vowelsAndConsonants no editor abaixo. Ele tem um parâmetro, uma string,, consistindo em letras minúsculas 
do alfabeto inglês (ou seja, aaté z). A função deve fazer o seguinte:

Primeiro, imprima cada vogal emem uma nova linha. As vogais do inglês são a , e , i , o e u , 
e cada vogal deve ser impressa na mesma ordem em que apareceu em.
Em segundo lugar, imprima cada consoante (ou seja, não vogal) em em uma nova linha na mesma ordem em que apareceu em . */

let word = "javascript";

function vowelsAndConsonants(s) {
  let vowels = "aeiou";
  let consonents = [];
  for (var i = 0; i < s.length; i++) {
    if (vowels.includes(s[i])) {
      console.log(s[i]);
    } else {
      consonents.push(s[i]);
    }
  }
  for (let j = 0; j < consonents.length; j++) {
    console.log(consonents[j]);
  }
}

vowelsAndConsonants(word);