/*Tarefa
Conclua a função isPositive abaixo. Ele tem um parâmetro inteiro, a . Se o valor de a for positivo, ele deve retornar a string SIM.
 Caso contrário, ele deve lançar um erro de acordo com as seguintes regras:

Se a for 0 , lance um Erro com a mensagem = Erro Zero .
Se a for negativo, lance um erro com a mensagem = Erro negativo . */

function isPositive(a){
    let result = '';
    if(a>0){
        result = "YES";
    }else if(a==0){
        throw ({message: "Erro Zero"});
    }else if(a<0){
        throw ({message: "Erro Negativ"});
    }
    return result;
}
let a = 1;
//console.log(isPositive(a));

function thisStudy(){

    this.name="Arthur";
    console.log(thisStudy.name);
}
thisStudy()

