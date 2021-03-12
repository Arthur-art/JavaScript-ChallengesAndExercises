const mat = document.querySelectorAll(".matematica");
const port = document.querySelectorAll(".portugues");
const fis = document.querySelectorAll(".fisica");
const quim = document.querySelectorAll(".quimica");
const geo = document.querySelectorAll(".geografia");
const ingles = document.querySelectorAll(".ingles");
const button = document.querySelector("button");
const tdresultMat = document.getElementById('notaMat');
const tdresultPort = document.getElementById('notaPort');
const tdresultFis = document.getElementById('notaFis');
const tdresultQuim = document.getElementById('notaQuim');
const tdresultGeo = document.getElementById('notaGeo');
const tdresultIngles = document.getElementById('notaIngles');
const inputAll = document.querySelectorAll("input");
const porcentagem = document.getElementById("porcentagem");

const setValue = inputAll.forEach((valueNode)=>{
    valueNode.setAttribute('value', '0');
    valueNode.setAttribute('required','')
});




const result = (mat, port, fis, quim, geo, ingles) => {
  let Value = 0;
  let portValue = 0;
  let fisValue = 0;
  let quimValue = 0;
  let geoValue = 0;
  let inglesValue = 0;
  let resultMat = 0;
  let resultPort = 0;
  let resultFis= 0;
  let resultQuim = 0;
  let resultGeo = 0;
  let resultIngles = 0;
  let htmlMat = ``;
  let htmlPort = ``;
  let htmlFis = ``;
  let htmlQuim = ``;
  let htmlGeo = ``;
  let htmlIngles = ``;
 

  mat.forEach((mat) => {
    Value = Value + parseInt(mat.value);
    resultMat = Value;
  });
  port.forEach((port) => {
    portValue = portValue + parseInt(port.value);
    resultPort = portValue;
  });
  fis.forEach((fis) => {
    fisValue = fisValue + parseInt(fis.value);
    resultFis = fisValue;
  });
  quim.forEach((quim) => {
    quimValue = quimValue + parseInt(quim.value);
    resultQuim = quimValue;
  });
  geo.forEach((geo) => {
    geoValue = geoValue + parseInt(geo.value);
    resultGeo = geoValue;
  });
  ingles.forEach((ingles) => {
    inglesValue = inglesValue + parseInt(ingles.value);
    resultIngles = inglesValue;
  });

 htmlMat = `${resultMat}` ;
 htmlPort = `${resultPort}` ;
 htmlFis = `${resultFis}` ;
 htmlQuim = `${resultQuim}` ;
 htmlGeo = `${resultGeo}` ;
 htmlIngles = `${resultIngles}` ;
  
 tdresultMat.innerHTML=htmlMat;
 tdresultPort.innerHTML=htmlPort;
 tdresultFis.innerHTML=htmlFis;
 tdresultQuim.innerHTML=htmlQuim;
 tdresultGeo.innerHTML=htmlGeo;
 tdresultIngles.innerHTML=htmlIngles;

 let porcentoMat = Math.ceil(resultMat * 100 / 30);
 let porcentoPort = Math.ceil(resultPort * 100 / 30);
 let porcentoFis = Math.ceil(resultFis * 100 / 30);
 let porcentoQuim = Math.ceil(resultQuim * 100 / 30);
 let porcentoGeo = Math.ceil(resultGeo * 100 / 30);
 let porcentoIngles = Math.ceil(resultIngles * 100 / 30);


 let valuePorcentagem = porcentagem.value.replace("%","");

if(porcentoMat >= valuePorcentagem){
    tdresultMat.classList.remove('naopassou');
    tdresultMat.classList.add('passou');
}else{
    tdresultMat.classList.remove('passou');
    tdresultMat.classList.add('naopassou');
}

if(porcentoPort >= valuePorcentagem){
    tdresultPort.classList.remove('naopassou');
    tdresultPort.classList.add('passou');
}else{
    tdresultPort.classList.remove('passou');
    tdresultPort.classList.add('naopassou');
} 

if(porcentoFis >= valuePorcentagem){
    tdresultFis.classList.remove('naopassou');
    tdresultFis.classList.add('passou');
}else{
    tdresultFis.classList.remove('passou');
    tdresultFis.classList.add('naopassou');
}

if(porcentoQuim >= valuePorcentagem){
    tdresultQuim.classList.remove('naopassou');
    tdresultQuim.classList.add('passou');
}else{
    tdresultQuim.classList.remove('passou');
    tdresultQuim.classList.add('naopassou');
}   

if(porcentoGeo >= valuePorcentagem){
    tdresultGeo.classList.remove('naopassou');
    tdresultGeo.classList.add('passou');
}else{
    tdresultGeo.classList.remove('passou');
    tdresultGeo.classList.add('naopassou');
}   
if(porcentoIngles >= valuePorcentagem){
    tdresultIngles.classList.remove('naopassou');
    tdresultIngles.classList.add('passou');
}else{
    tdresultIngles.classList.remove('passou');
    tdresultIngles.classList.add('naopassou');
}   
};


button.addEventListener('click', ()=>{result(mat, port, fis, quim, geo, ingles)})
