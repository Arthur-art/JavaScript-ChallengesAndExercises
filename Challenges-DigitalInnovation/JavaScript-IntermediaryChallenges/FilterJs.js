/*Desafio
Crie um programa onde você receberá valores inteiros não negativos como entrada.

Ordene estes valores de acordo com o seguinte critério:

Primeiro os Pares
Depois os Ímpares
Você deve exibir os pares em ordem crescente e na sequência os ímpares em ordem decrescente. */

let totalItems = [4,32,34,543,3456,654,567,87,6789,98];
let pares = [];

const paresData = (item)=>{
    return item %2 == 0;
}

const imparesData = (item)=>{
    return item %2 == 1;
}

const ordemCrescente = (a,b)=>{
    if(a>b) return 1;
    if(a<b) return -1;

    return 0;
}

const ordemDecrescente = (a,b)=>{
    if(a<b) return 1;
    if(a>b) return -1;

    return 0;
}

pares.push(...totalItems.filter(paresData).sort(ordemCrescente));
pares.push(...totalItems.filter(imparesData).sort(ordemDecrescente));
//console.log(pares)
for(let i in pares){
    console.log(pares[i]);
}

/*console.log(totalItems.filter(paresData).sort(ordemCrescente));
console.log(totalItems.filter(imparesData).sort(ordemDecrescente))
console.log(pares)*/