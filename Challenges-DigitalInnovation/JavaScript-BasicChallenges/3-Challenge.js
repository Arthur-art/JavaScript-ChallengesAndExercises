
/*Desafio
Você deve fazer a leitura de X valores inteiros. Em seguida mostre quantos valores informados são pares, quantos valores 
informados são ímpares, quantos valores informados são positivos e quantos valores informados são negativos.

Entrada
Você receberá 5 valores inteiros.

Saída
Exiba a mensagem conforme o exemplo de saída abaixo, sendo uma mensagem por linha e não esquecendo o final de linha após cada uma. */

/*for (let i = 0; i < 5; i++) {
  numeros[i] = parseInt(gets().split(" "))
}*/


const numeros = [2,4,6,5,3,1,0,0,-2,-4,-5];

let numPar = (item)=>{
  if(item != 0){
    return item%2==0;
  }
}

let numImpar = (item)=>{
  if(item > 0){
    return item%2==1;
  }
  return item%2 == -1
}

let numPos = (item)=>{
  if(item > 0){
    return item;
  }
}

let numNeg = (item)=>{
  if(item < 0){
    return item;
  }
}

let numNeut = (item)=>{
  return item == 0;
}
console.log(`${numeros.filter(numPar).length} numero(s) par(es)` )
console.log(`${numeros.filter(numImpar).length} numero(s) impar(es)`)
console.log(`${numeros.filter(numPos).length} numero(s) positivo(s)`)
console.log(`${numeros.filter(numNeg).length} numero(s) negativo(s)`)
console.log(`${numeros.filter(numNeut).length} numero(s) zero(s)`)