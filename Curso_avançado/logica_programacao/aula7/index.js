const tresHoras = 60 * 60 * 3 * 100; //3 horas
const umDia = 60 * 60 * 24 * 1000; // 1 dia
const data = new Date(0 + tresHoras - umDia);
//ANO, MES, DIA ,HORA , MINUTO, SEGUNDO,MILE S

//dataString
const dataS = new Date("1989-11-09T12:00:00");
console.log(dataS.toString());

console.log(data.toString());
