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


//Retirando itens duplicados do array com filter
const filterFunction = (()=>{
  let array = ["arthur", "ivar", "bk201", "arthur", "ivar"];
  /*é checado se o indexOf do elemento é igual a posicao que ele foi encontrado*/
  let uniqueProducts = array.filter((element,position,array)=>{
      return array.indexOf(element) === position;
  });
  console.log(uniqueProducts)
})();