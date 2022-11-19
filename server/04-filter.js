const words = ['spay', 'limit', 'elite', 'exuberant'];

const newArray = [];
for (i = 0; i < words.length; i++) {
  const item = words[i];
  if (item.length >= 6) {
    newArray.push(item);
  }
}
console.log('original: ', words);
console.log('Nuevo: ', newArray);

const newArray2 = words.filter(item => item.length >= 6);
console.log('original: ', words);
console.log('Nuevo: ', newArray2);

const orders = [
  {
    customerName: 'Nicolas',
    total: 60,
    delivered: true,
  },
  {
    customerName: 'Zulema',
    total: 120,
    delivered: false,
  },
  {
    customerName: 'Santiago',
    total: 180,
    delivered: true,
  },
  {
    customerName: 'Valentina',
    total: 240,
    delivered: true,
  },
];

const delivered = orders.filter(item => item.delivered)

console.log(delivered);

const search = (query) => {
  return orders.filter((item) => {
    return item.customerName.includes(query);
  });
}