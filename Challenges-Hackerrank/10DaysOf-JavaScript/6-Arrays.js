/*Tarefa
Conclua a função getSecondLargest no editor abaixo. Ele tem um parâmetro: uma matriz, 
nums , de n números. A função deve encontrar e retornar o segundo maior número em nums . */

function getSecondLargest(nums) {

   let numMax=nums.filter((value)=>value!==Math.max(...nums));
   return Math.max(...numMax);
    
 
}
let nums = [1,2,3,4,5,6,7,8,9,10];
console.log(getSecondLargest(nums))