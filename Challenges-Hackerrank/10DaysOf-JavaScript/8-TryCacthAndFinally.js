/*Tarefa
Conclua a função reverseString; tem um parâmetro, s . Você deve realizar as seguintes ações:

Tente reverter a string s usando os métodos split, reverse e join.
Se uma exceção for lançada, capture-a e imprima o conteúdo da mensagem da exceção em uma nova linha.
Imprima s em uma nova linha. Se nenhuma exceção foi lançada, então esta deve ser a string invertida; 
se uma exceção foi lançada, esta deve ser a string original. */

function reverseString(s) {
    try{
       s = s.split('').reverse().join('');
       
    }catch(e){
        console.log("s.split is not a function")
    }
     console.log(s);
}

let s = "12345";
reverseString(s);
