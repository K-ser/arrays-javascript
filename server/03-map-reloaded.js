const orders = [
  {
    curtomerName: 'Nicolas',
    total: 60,
    delivered: true,
  },
  {
    curtomerName: 'Zulema',
    total: 120,
    delivered: false,
  },
  {
    curtomerName: 'Santiago',
    total: 180,
    delivered: true,
  },
  {
    curtomerName: 'Valentina',
    total: 240,
    delivered: true,
  },
];

const total = orders.map(item => item.total);
console.log(total);

const tax = orders.map(item => {
  return {
    ...item,
    tax: .19,
  }
});
console.log(tax);
console.log(orders);