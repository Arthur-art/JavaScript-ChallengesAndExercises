let array2 = ["arthur", "ivar", "bk201", "arthur", "ivar"];

const Utils={
  showingRepeated(array){
    valorRepetido=[];
    for(let i in array){
      let valorcomp=array[i];
      cont=0;
      for(let i in array){
        if(valorcomp===array[i]){
          cont++;
          if(cont>1){
            cont--;
            valorRepetido.push(array[i]);
            delete(array[i]);
          }
        }
      }
    }
    return valorRepetido;
  }
}
console.log(Utils.deletandoRepetidos(array2));

//Retirando itens duplicados do array com filter
const filterFunction = (()=>{
  let array = ["arthur", "ivar", "bk201", "arthur", "ivar"];
  /*é checado se o elemento na primeira posicao que ele 
  foi encontrado é === a posicao em que esta o indice position, se for filter recebe true e 
  o element entra na variavel elementTrue, se não recebe false e é excluido de elementTrue*/
  let uniqueProducts = array.filter((element,position,array)=>{
      let elementTrue =  array.indexOf(element) === position;
      //console.log(elementTrue)
      //console.log(element);
      //console.log(position);
      //console.log(array.indexOf(element));
      return elementTrue;
  });

  
  console.log(uniqueProducts);
})();