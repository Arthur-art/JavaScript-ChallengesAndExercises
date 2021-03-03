/*Tarefa

Complete as seguintes funções no editor abaixo:

getArea(length, width): Calcule e retorne a área de um retângulo com lados e .
getPerimeter(length, width): Calcule e retorne o perímetro de um retângulo com lados e .
Os valores retornados por essas funções são impressos em stdout por código de stub bloqueado no editor. */


let length = 13;
let width = 4;

function getArea(length, width) {
    let area;
   area = length * width;
    
    return area;
}


function getPerimeter(length, width) {
    let perimeter;
 
    perimeter = 2*(length+width);
 
    return perimeter;
}

console.log(getArea(length,width));
console.log(getPerimeter(length,width));
