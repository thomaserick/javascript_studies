//ForEach

const a1 = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100];

for (const iterator of a1) {
  console.log(iterator);
}

a1.forEach((element, el) => {
  console.log(element, el);
});
