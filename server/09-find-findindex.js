const numbers = [1,30,49,29,10,13];

let res = undefined;
for (i = 0; i < numbers.length; i++) {
  const element = numbers[i];
  if (element === 555) {
    res = element;
    break;
  }
}

const res2 = numbers.find(item => item === 555);

console.log('For', res);
console.log('Find', res2);

const products = [
  {
    name: 'Pizza',
    price: 12,
    id: '🍕',
  },
  {
    name: 'Burger',
    price: 23,
    id: '🍔',
  },
  {
    name: 'Hot dog',
    price: 34,
    id: '🌭',
  },
  {
    name: 'Hot cakes',
    price: 355,
    id: '🥞',
  },
];

const product = products.find(item => item.id === '🍕');
const product2 = products.findIndex(item => item.id === '🍕');

console.log(product);
console.log(product2);
