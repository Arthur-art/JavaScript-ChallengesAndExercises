/*Tarefa

Complete a função vowelsAndConsonants no editor abaixo. Ele tem um parâmetro, uma string,, consistindo em letras minúsculas 
do alfabeto inglês (ou seja, aaté z). A função deve fazer o seguinte:

Primeiro, imprima cada vogal emem uma nova linha. As vogais do inglês são a , e , i , o e u , 
e cada vogal deve ser impressa na mesma ordem em que apareceu em.
Em segundo lugar, imprima cada consoante (ou seja, não vogal) em em uma nova linha na mesma ordem em que apareceu em . */

let word = "javascript";

let vowelsAndConsonants = (word)=>{
   let vowels = "aeiou";
   let consonant = [];
   let wordNumb = [];
   for(let i in word){
       if(vowels.includes(word[i])){
           console.log(word[i]);
           wordNumb.push(word[i]);

    
       }else{
           consonant.push(word[i]);
       }
   }
   for(let i=0;i<consonant.length;i++){
       console.log(consonant[i]);
       
   }
 console.log(`${consonant.length} consonant and ${wordNumb.length} vowels`)
 
}

vowelsAndConsonants(word);