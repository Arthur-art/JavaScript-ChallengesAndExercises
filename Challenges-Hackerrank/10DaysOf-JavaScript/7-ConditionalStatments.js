/*Tarefa
Conclua a função getLetter (s) no editor. Ele tem um parâmetro: uma string, s , 
que consiste em letras do alfabeto inglês em minúsculas (ou seja, de a a z). 
Deve retornar A, B, C ou D dependendo dos seguintes critérios:

Se o primeiro caractere na string s estiver no conjunto {a, e, i, o, u} , então retorne A.
Se o primeiro caractere na string s estiver no conjunto {b, c, d, f, g} , então retorne B.
Se o primeiro caractere na string s estiver no conjunto {h, j, k, l, m} , então retorne C.
Se o primeiro caractere na string s estiver no conjunto {n, p, q, r, s, t, v, w, x, y, z} , então retorne D. */



function getLetter(s) {
    let letter;
   
   let characterA = "aeiou";
   let characterB = "bcdfg";
   let characterC = "hjklm";
   let characterD = "npqrstvwxyz";
    
    for(let i in s){
        if(characterA.includes(s[0])){
            letter = "A";
        }else if(characterB.includes(s[0])){
            letter = "B";
        }else if(characterC.includes(s[0])){
            letter = "C";
        }else if(characterD.includes(s[0])){
            letter = "D";
        }
    }
    
    return letter;
}