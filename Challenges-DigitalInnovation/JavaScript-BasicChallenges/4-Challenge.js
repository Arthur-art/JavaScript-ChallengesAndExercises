/*Faça a leitura de um valor inteiro. Em seguida,
 calcule o menor número de notas possíveis (cédulas) onde o valor pode ser decomposto.
 As notas que você deve considerar são de 100, 50, 20, 10, 5, 2 e 1.
  Na sequência mostre o valor lido e a relação de notas necessárias.
  */

let value = 1850;
let notes = [100, 50, 20, 10, 5, 2, 1];
const arrayNotes = (notes,value)=>{
  let html = ``;
  for(let i in notes){
    html += `${Math.floor(value/notes[i])} notas de ${(notes[i])},00 reais \n`
    value %= notes[i];
  }
  return console.log(html);
}
arrayNotes(notes,value);