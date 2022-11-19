const totals = [1, 2, 3, 4];

let sum = 0;
for (i = 0; i < totals.length; i++) {
  const element = totals[i];
  sum += element;
}
console.log(sum);

const suma = totals.reduce((sum, item) => sum + item, 0);
console.log(suma);