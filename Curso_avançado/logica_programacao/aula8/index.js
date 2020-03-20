const data = new Date("1989-11-09 00:00:00");
const diaSemana = data.getDay();
const diaSemanaTexto = getDiaSemanaTexto(diaSemana);

console.log(diaSemanaTexto);

function getDiaSemanaTexto(diaSemana) {
  switch (diaSemana) {
    case 0:
      return "Domingo";
    case 1:
      return "Segunda";
    case 2:
      return "Terça";
    case 3:
      return "Quarta";
    case 4:
      return "Quinta";
    case 5:
      return "Sexta";
    case 6:
      return "Sábado";
    default:
      return "";
  }
}
