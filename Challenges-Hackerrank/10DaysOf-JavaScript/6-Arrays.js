/*Tarefa
Conclua a função getSecondLargest no editor abaixo. Ele tem um parâmetro: uma matriz, 
nums , de n números. A função deve encontrar e retornar o segundo maior número em nums . */

function getSecondLargest(nums) {
 
 const numMax = Math.max(...nums);
 nums = nums.filter(value=>value!==numMax);
 return Math.max(...nums);
 
}
let nums = [1,2,3,4,5,6,7,8,9,10];
console.log(getSecondLargest(nums))