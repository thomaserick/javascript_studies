//Funções CallBack

//Gera um numero aleatorio entre 1s a 3s
function rand(min = 1000, max = 3000) {
  const num = Math.random() * (max - min) + min;
  return Math.floor(num);
}
function f1(CallBack) {
  setTimeout(function() {
    console.log("f1");
    if (CallBack) CallBack();
  }, rand());
}
function f2(CallBack) {
  setTimeout(function() {
    console.log("f2");
    if (CallBack) CallBack();
  }, rand());
}
function f3(CallBack) {
  setTimeout(function() {
    console.log("f3");
    if (CallBack) CallBack();
  }, rand());
}

//CallBack Hell
// f1(function() {
//   f2(function() {
//     f3(function() {
//       console.log("Olá mundo!");
//     });
//   });
// });

//Mesma coisa acima
f1(f1Callback);
function f1Callback() {
  f2(f2Callback);
}
function f2Callback() {
  f3(f3Callback);
}
function f3Callback() {
  console.log("Ola Mundo");
}
