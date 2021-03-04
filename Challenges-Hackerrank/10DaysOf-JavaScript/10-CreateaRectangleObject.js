/*Tarefa
Conclua a função no editor. Possui dois parâmetros: e. Ele deve retornar um objeto de modelagem de retângulo que possui 
as seguintes propriedades:

comprimento : este valor é igual a a .
largura : este valor é igual a b .
perímetro : este valor é igual a 2 X (a + b)
área : este valor é igual a a X b
Nota : Os nomes das propriedades do objeto devem ser escritos corretamente para passar neste desafio. */



function Rectangle(a, b) {
    this.length = a;
    this.width = b;
    this.perimeter = 2*(a+b);
    this.area = a * b;

}


function main() {
    
    const rec = new Rectangle(4, 5);
    
    console.log(rec.length);
    console.log(rec.width);
    console.log(rec.perimeter);
    console.log(rec.area);
}

main()