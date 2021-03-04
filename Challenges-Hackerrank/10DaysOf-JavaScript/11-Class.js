/*Tarefa
Crie uma classe Polygon que tenha as seguintes propriedades:

Um construtor que obtém uma matriz de valores inteiros que descrevem os comprimentos dos lados do polígono.
Um método perimeter () que retorna o perímetro do polígono.
O código bloqueado no editor testa o construtor Polygon e o método de perímetro. */


class Polygon{
    constructor(args){
        this.value = args;
    }

    perimeter(){
        return (this.value || []).reduce((target, item )=> target +item);
    }
}


const rectangle = new Polygon([10, 20, 10, 20]);
const square = new Polygon([10, 10, 10, 10]);
const pentagon = new Polygon([10, 20, 30, 40, 43]);

console.log(rectangle.perimeter());
console.log(square.perimeter());
console.log(pentagon.perimeter());