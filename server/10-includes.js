const pets = ['cat', 'dog', 'bat'];

let res = undefined;
for (i = 0; i < pets.length; i++) {
  const element = pets[i];
  if (element === 'dog') {
    res = true;
    break;
  }
}

const res2 = pets.includes('dog');

console.log('for', res);
console.log('includes', res2);
