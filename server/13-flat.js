const matriz = [
  [1,2,3],
  [4,5,6,[1,2,[3,4]]],
  [7,8,9],
];

const newArray = [];
for (i = 0; i < matriz.length; i++) {
  const pos = matriz[i];
  for (j = 0; j < pos.length; j++) {
    const pos2 = matriz[i][j]; 
    newArray.push(pos2);
  }
}

const res = matriz.flat(3);

//funcion para comprobar si un dato es un array
function isArray(arr) {
  return Array.isArray(arr);
}

//funcion con un for clasico
function copyArray(arr) {
  let concat = [];

  for (let i = 0; i < arr.length; i++) {
    const pos = arr[i];
    if(isArray(pos)) {
      concat.push(...copyArray(pos))
    } else {
      concat.push(pos);
    }
  }
  return concat;
}

//funcion con for...of
function copyArray2(arr) {
  let concat = [];

  for (let i of arr) {
    const pos = i;
    if(isArray(i)) {
      concat.push(...copyArray(i))
    } else {
      concat.push(i);
    }
  }
  return concat;
}

const recursive = copyArray(matriz);
const recursive2 = copyArray2(matriz);

console.log('for', newArray);
console.log('flat', res);
console.log('recursión', recursive);
console.log('recursión2', recursive2);

const la = matriz.join(',').split(',').map(item => + item);
console.log(la)

