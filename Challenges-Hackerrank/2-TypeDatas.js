/*Tarefa

Variáveis ​​nomeadas firstInteger,firstDecimal,firstString e são declarados para você no editor abaixo.
 Você deve usar o operador + para executar a seguinte sequência de operações:

Converter secondInteger para um inteiro (tipo de número), em seguida, some-o com firstInteger e imprima
 o resultado em uma nova linha usando console.log.

Converter secondDecimal para um número de ponto flutuante (tipo de número),

em seguida, some-o com firstDecimal e imprima o resultado em uma nova linha usando console.log.

Imprima a concatenação de firstString e secondString em uma nova linha usando console.log. Observe que firstString 
deve ser impresso primeiro. */


function performOperation(secondInteger, secondDecimal, secondString) {
    
    const firstInteger = 4;
    
    let secondintegerNumber = parseInt(secondInteger);
    let sumFirstIntegerSecondInteger =   secondintegerNumber + firstInteger;
    console.log(sumFirstIntegerSecondInteger);
    
    const firstDecimal = 4.0;
    
    let floatSecondDecimal = parseFloat(secondDecimal);
    let sumFirstDecimalSecond = floatSecondDecimal+firstDecimal;
    console.log(sumFirstDecimalSecond);
    
    const firstString = 'HackerRank ';
    
    console.log(`${firstString}${secondString}`);

}
let secondInteger = 12.5;
let secondDecimal = 134;
let secondString = 'Challenge';

performOperation(secondInteger, secondDecimal, secondString)