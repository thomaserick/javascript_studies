function soma(x, y) {
  if (typeof x !== "number" || typeof y !== "number")
    throw new Error("x e y precisam ser números");

  return x + y;
}

try {
  console.log(soma(1, 3));
  //console.log(soma("1", 3));
} catch (err) {
  console.log(err);
}
