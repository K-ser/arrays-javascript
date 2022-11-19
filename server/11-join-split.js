const elements = ['Fire', 'Air', 'Water'];

let resFinal = '';
const separator = '--';
for (i = 0; i <elements.length; i++) {
  const element = elements[i];
  if (element === elements.at(-1)) {
      resFinal += element;
  break;
  } else {
    resFinal += element + separator;
  }
}

const resFinal2 = elements.join(separator);

console.log('for', resFinal);
console.log('join', resFinal2);

const title = 'Pau eres la bandera';

const titleArr = title
.split(' ')
.join('👍')
.toLocaleLowerCase()
console.log(titleArr);

