/*Você deve calcular o consumo médio de um automóvel onde será informada 
a distância total percorrida (em Km) e o total de combustível consumido (em litros). */



let distance = 50;
let combustible = 100;
let total = parseFloat(distance / combustible).toFixed(3);
console.log(total + " km/l");