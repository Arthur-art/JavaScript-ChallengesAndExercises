/*Tarefa
Implemente uma função denominada fatorial que possui um parâmetro: um inteiro, n . Deve retornar o valor de n! (ou seja, n fatorial). */



const factorial = (n) => (n - 1) > 0 ? n * factorial(n - 1) : 1;


console.log(factorial(4));