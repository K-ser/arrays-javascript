const letters = ['a', 'b', 'c', 'd'];

const newMap = letters.map(item => item + '++');

// for (i = 0; i < letters.length; i++) {
//   newMap.push(`${letters[i]}++ `);
// }

console.log('Original:', letters);
console.log('Copia:', newMap);