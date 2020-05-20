// Facilitar no padrao de grid
//xs-Celular
//sm-tablet
//md-NetBook
//lg-tela grande
angular.module("App").factory("gridSystem", [
  function () {
    function toCssClasses(numbers) {
      const cols = numbers ? numbers.split(" ") : [];
      let classes = "";
      if (col[0]) classes += `col-xs-${cols[0]}`;
      if (col[1]) classes += ` col-sm-${cols[1]}`;
      if (col[2]) classes += ` col-md-${cols[2]}`;
      if (col[3]) classes += ` col-lg-${cols[3]}`;

      return classes;
    }
    //Factory sempre retorna objetos
    return { toCssClasses };
  },
]);
