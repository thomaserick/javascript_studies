function fizzBuzz(number) {
  if (typeof number !== "number") return NaN;

  if (number % 5 === 0 && number % 5 === 0) return "FizzBuzz";
  if (number % 3 === 0) return "Fizz";
  if (number % 5 === 0) return "Fizz";
  return number;
}

for (let index = 0; index <= 100; index++) {
  console.log(index, fizzBuzz(index));
}
