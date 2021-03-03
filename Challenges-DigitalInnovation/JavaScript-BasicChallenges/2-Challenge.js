/*Crie um programa que leia um número e mostre os números pares até esse número, inclusive ele mesmo.*/


let number = 20;
let cont = 0;
for(let i=0;i<number;i++){
    cont++;
    if(cont%2==0){
        console.log(cont);
    }
}