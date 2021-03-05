/*Tarefa
Fornecemos a implementação para uma classe Rectangle no editor. Execute as seguintes tarefas:

Adicione um método de área ao protótipo de Rectangle.
Crie uma classe Square que satisfaça o seguinte:
É uma subclasse de Rectangle.
Ele contém um construtor e nenhum outro método.
Ele pode usar o método de área da classe Rectangle para imprimir a área de um objeto Square. */


class Rectangle {
    constructor(w, h) {
        this.w = w;
        this.h = h;
    }
}

Rectangle.prototype.area = function () { return ( this .w * this .h); }

class Square extends Rectangle {
    constructor(s) {
        super(s, s);
    }
}

if (JSON.stringify(Object.getOwnPropertyNames(Square.prototype)) === JSON.stringify([ 'constructor' ])) {
    const rec = new Rectangle(3, 4);
    const sqr = new Square(3);
    
    console.log(rec.area());
    console.log(sqr.area());
} else {
    console.log(-1);
    console.log(-1);
}