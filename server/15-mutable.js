const products2 = [
  { title: "Pizza", price: 121, id: "🍕" },
  { title: "Burger", price: 121, id: "🍔" },
  { title: "Hot cakes", price: 121, id: "🥞" },
];

const myProducts = [];
const productsReto = [...products]

const productIndex = products.findIndex(item => item.id === '🍔');
if (productIndex) {
  myProducts.push(products[productIndex]);
  productsReto.splice(productIndex, 1);
  products.splice(productIndex, 1);
};


console.log('products', products);
console.log('myProducts', myProducts);
console.log('reto', productsReto);
console.log('-'.repeat(10));


//Update

const products = [
  { title: "Pizza", price: 121, id: "🍕" },
  { title: "Burger", price: 121, id: "🍔" },
  { title: "Hot cakes", price: 121, id: "🥞" },
];

const update = {
  id: "🥞",
  chages: {
    price: 200,
    description: 'Delicioso'
  }
};


const updateIndex = products.findIndex(item => item.id === "🥞");
if (updateIndex !== -1) {
  products[updateIndex] = {
    ...products[updateIndex],
    ...update.chages,
  };
};

const newArray = products.map(item => {
  return {
  ...item,
  ...update.chages,
  }}
);

console.log(products);
console.log(newArray);