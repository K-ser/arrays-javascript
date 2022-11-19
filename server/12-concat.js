const elements = [1, 1, 2, 2];
const otherElements = [3, 3, 4, 4];

const newArray = [...elements];
for (let i = 0; i < otherElements.length; i++) {
  const element = otherElements[i];
  newArray.push(element)
}

const rta2 = elements.concat(otherElements);
const rta3 = [...elements, ...otherElements];
const rta4 = [...elements, ...'random'];
console.log('for', newArray);
console.log('concat', rta2);
console.log('...', rta3);
console.log('for', rta4);
elements.push(...otherElements);
console.log(elements);